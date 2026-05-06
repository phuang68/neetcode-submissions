class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;

        for(const char of word) {
            let c = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if(node.children[c] === null) {
                node.children[c] = new TrieNode();
            }
            node = node.children[c];
        }

        node.isEnd = true;
    }

    searchHelper (word, start, root) {
        let node = root;
        
        for(let i = start; i < word.length; i++) {
                if(word.charAt(i) === '.') {
                    for(const child of node.children) {
                        if(child !== null && this.searchHelper(word, i + 1, child)) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    let c = word.charCodeAt(i) - 'a'.charCodeAt(0);
                    if(!node.children[c]) {
                        return false;
                    }
                    node = node.children[c];
                }
            }

        return node.isEnd;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.searchHelper(word, 0, this.root);    
    }
}
