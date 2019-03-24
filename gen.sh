#!/bin/bash
LETTERS="q w e r t y u i o p a s d f g h j k l z x c v b n m"

rm -fr __test__
mkdir __test__
for a in $LETTERS; do
    cat << EOF > __test__/$a.spec.js
import $a from '../src/$a'

let instance;
beforeEach(() => instance = new $a());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
EOF
done


subletters() {
    (
        mkdir -p $subpath
        cd $subpath
        echo "const classes = [];"
        for a in $LETTERS; do
            p=$(echo $a | tr a-z za-y)
            echo "import _$k$a from './$subpath/$a';"
            echo "classes.push(_$k$a);"
            if [[ "$a" != "a" ]]; then
                cat << EOF > ./$a.js
import _p from './$p'
                
export default class $a {
    constructor() {
        this.be = new _p().be;
    }
}
EOF
            else
                cat << EOF > ./$a.js
export default class $a {
    constructor() {
        this.be = true;
    }
}
EOF
            fi
        done
    )
}


rm -fr src
mkdir src
(
    cd src
    for a in $LETTERS; do
        #for b in $LETTERS; do
            subpath=s/$a/$b k=$a$b subletters > ./$a.js
        #done
        p=$(echo $a | tr a-z za-y)
        if [[ "$a" != "a" ]]; then
            cat << EOF >> ./$a.js
import _p from './$p'

export default class $a {
    constructor() {
        this.be = classes.every(_c => new _c().be);
        this.be = this.be && new _p().be;
    }
}
EOF
        else
            cat << EOF >> ./$a.js
export default class $a {
    constructor() {
        this.be = classes.every(_c => new _c().be);
    }
}
EOF
        fi
    done
)