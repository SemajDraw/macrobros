import argparse
import glob
import os
from bs4 import BeautifulSoup


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-d", "--dir", type=str, required=True)
    args = parser.parse_args()
    return args


def inspect_parser(soup, tag):
    for x in soup.find_all(tag):
        if x.get("src") and x["src"].startswith("/_next/"):
            x["src"] = '{% static "' + x["src"] + '" %}'
        if x.get("href") and x["href"].startswith("/_next/"):
            x["href"] = '{% static "' + x["href"] + '" %}'


def render_html_static():
    args = parse_args()
    for html_file in glob.glob(os.path.join(args.dir, "*html")):
        soup = BeautifulSoup(open(html_file), "html.parser")
        soup.insert(0, "{% load static %}")
        inspect_parser(soup, "link")
        inspect_parser(soup, "script")
        fout = open(html_file, "wb")
        fout.write(soup.prettify("utf-8"))
        fout.close()


render_html_static()
