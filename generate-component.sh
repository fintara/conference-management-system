#!/usr/bin/env bash

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 COMPONENT-NAME DESTINATION" >&2
  exit 1
fi

NAME="$1"
DEST="$2"
FULLPATH="$DEST/$NAME"

mkdir "$FULLPATH"
touch "$FULLPATH/$NAME.tsx"
touch "$FULLPATH/$NAME.scss"
touch "$FULLPATH/index.ts"

cat > "$FULLPATH/$NAME.tsx" <<EOL
import React, { FunctionComponent } from "react"
import "./${NAME}.scss"

const ${NAME}: FunctionComponent = () => {
  return (
    <div className="container">
      <h1>${NAME}</h1>
    </div>
  )
}

export default ${NAME}
EOL

cat > "$FULLPATH/index.ts" <<EOL
import ${NAME} from './${NAME}'
export default ${NAME}
EOL
