#!/usr/bin/env python3
import os
import json
import csv


def read_json_files(folder_path: str) -> [dict] :
    """
    Read all JSON files from a specified folder.

    Parameters:
    - folder_path (str): The path to the folder containing JSON files.

    Returns:
    - Dict[str, dict]: A dictionary of dictionaries, each value representing the content of a JSON file, and each key the filename.
    """
    json_data = []

    # Iterate over files in the folder
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)

        # Check if the file is a JSON file
        if filename.endswith(".json") and os.path.isfile(file_path):
            with open(file_path, 'r', encoding='utf-8') as json_file:
                try:
                    # Load JSON content
                    chapters = json.load(json_file)
                    book_id = os.path.splitext(filename)[0]
                    for chapter_number, verses in chapters.items():
                        if chapter_number == "charset":
                            continue
                        json_data.append(
                            {
                                "book_id": book_id, 
                                "chapter": chapter_number,
                                "verses": len(verses)
                            }
                        )
                except json.JSONDecodeError as e:
                    print(f"Error reading {filename}: {e}")

    return json_data


def write_to_csv(csv_file_path, data) -> None:
    """
    Write data to a CSV file.

    Parameters:
    - csv_file_path (str): The path to the CSV file.
    - data (List[dict]): The data to be written to the CSV file.
    """
    with open(csv_file_path, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = data[0].keys() if data else []
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        # Write header
        writer.writeheader()

        # Write data
        writer.writerows(data)


books_data = read_json_files("data")
write_to_csv("verses_metadata.csv", books_data)


