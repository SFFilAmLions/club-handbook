import unittest

from check_placeholders import validate


class PlaceholderChecks(unittest.TestCase):
    def test_rejects_old_style(self):
        self.assertEqual(len(validate("```text\nDate: [weekday, date]\n```")), 1)

    def test_allows_links_and_mermaid(self):
        text = "[Agenda](agendas.md)\n```mermaid\nA[Agenda] --> B[Minutes]\n```"
        self.assertEqual(validate(text), [])

    def test_accepts_curly_placeholders(self):
        self.assertEqual(validate("To: {Club Mailing List Address}"), [])


if __name__ == "__main__":
    unittest.main()
