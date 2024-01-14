#!/usr/bin/env python3
import csv
import os
import json
import unittest

# For PyTest
workdir = os.getcwd()
if os.path.split(workdir)[-1] != 'bible':
    os.chdir("bible")


def read_csv(file_path: str) -> csv.DictReader:
    with open(file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        return list(reader)


def read_json_files(folder_path) -> {str: dict} :
    """
    Read all JSON files from a specified folder.

    Parameters:
    - folder_path (str): The path to the folder containing JSON files.

    Returns:
    - Dict[str, dict]: A dictionary of dictionaries, each value representing the content of a JSON file, and each key the filename.
    """
    json_data = {}

    # Iterate over files in the folder
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)

        # Check if the file is a JSON file
        if filename.endswith(".json") and os.path.isfile(file_path):
            with open(file_path, 'r', encoding='utf-8') as json_file:
                try:
                    # Load JSON content
                    data = json.load(json_file)
                    json_data[filename] = data
                except json.JSONDecodeError as e:
                    print(f"Error reading {filename}: {e}")

    return json_data


class SanityCheck(unittest.TestCase):
    def setUp(self):    
        self.books_metadata = read_csv("toc.csv")
        self.books = read_json_files("data")

    def test_all_books_included(self):
        metadata_books = [f'{book["id"]}.json' for book in self.books_metadata]
        folder_books = self.books.keys()
        self.assertSetEqual(set(metadata_books), set(folder_books))

    def test_all_chapters_included(self):
        metadata_chapters = {f'{book["id"]}.json': int(book["chapters"]) for book in self.books_metadata}
        folder_chapters = {filename: len(content) - 1 for filename, content in self.books.items()}
        for filename, no_chapters in metadata_chapters.items():
            if filename == "OT-29_Lamentations.json": # Including prologue
                no_chapters = 6
            self.assertEqual(no_chapters, folder_chapters[filename], filename)


if "__main__" == __name__:
    unittest.main()