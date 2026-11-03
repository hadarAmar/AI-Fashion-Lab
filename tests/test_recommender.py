"""Native Python verification of the exact rule engine used by Pyodide."""
import json
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'python'))
from recommender import recommend_fashion_look


class FashionRecommendationTests(unittest.TestCase):
    def evaluate(self, **choices):
        base = dict(style='classic_couture', occasion='gala_evening',
                    budget='high_couture', colorHex='#C5A059',
                    fabric='silk', silhouette='evening')
        base.update(choices)
        data = json.loads(recommend_fashion_look(json.dumps(base)))
        self.assertEqual(data['status'], 'success')
        self.assertEqual(data['total_score'], sum(v['score'] for v in data['breakdown'].values()))
        self.assertLessEqual(data['total_score'], 100)
        return data

    def test_different_styles_generate_distinct_recommendations(self):
        classic = self.evaluate()
        minimal = self.evaluate(style='minimalist', occasion='daytime_atelier',
                                budget='accessible_luxury', colorHex='#1C1B1A',
                                fabric='matte', silhouette='column')
        avant = self.evaluate(style='avantgarde', occasion='runway_show',
                              budget='collector_edition', colorHex='#D8CFF2',
                              fabric='velvet', silhouette='avantgarde')
        self.assertEqual(classic['recommendation']['id'], 'look-01')
        self.assertEqual(minimal['recommendation']['id'], 'look-02')
        self.assertEqual(avant['recommendation']['id'], 'look-03')

    def test_budget_affects_score(self):
        high = self.evaluate(budget='high_couture')
        low = self.evaluate(budget='accessible_luxury')
        self.assertNotEqual(high['breakdown']['budget']['score'], low['breakdown']['budget']['score'])

    def test_invalid_json(self):
        result = json.loads(recommend_fashion_look('{not-json'))
        self.assertIn('error', result)


if __name__ == '__main__':
    unittest.main()
