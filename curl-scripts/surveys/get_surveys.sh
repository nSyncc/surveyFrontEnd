#!/bin/bash

curl "http://localhost:4741/surveys/${ID}" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "surveys": {
    "question1": "'"${QUESTION1}"'",
    "question2": "'"${QUESTION2}"'",
    "question3": "'"${QUESTION3}"'",
    "question4": "'"${QUESTION4}"'",
    "question5": "'"${QUESTION5}"'",
  }
}'

echo
