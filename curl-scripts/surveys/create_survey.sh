#!/bin/bash

curl "http://localhost:4741" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    survey: {
      "question1": "'"${QUESTION1}"'",
      "question2": "'"${QUESTION2}"'",
      "question3": "'"${QUESTION3}"'",
      "question4": "'"${QUESTION4}"'",
      "question5": "'"${QUESTION5}"'",
    }
  }'

echo
