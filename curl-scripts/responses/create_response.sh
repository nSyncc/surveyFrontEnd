#!/bin/bash

curl "http://localhost:4741" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --data '{
    response: {
      "response1": "'"${RESPONSE1}"'",
      "response2": "'"${RESPONSE2}"'",
      "response3": "'"${RESPONSE3}"'",
      "response4": "'"${RESPONSE4}"'",
      "response5": "'"${RESPONSE5}"'",
    }
  }'

echo
