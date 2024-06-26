var Node=function(){
    this.children={}
    this.end=false
}
var Trie = function() {
    this.root=new Node()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node=this.root
    for(let i=0;i<word.length;i++){
        let char=word[i]
        if(!node.children[char]){
            node.children[char]=new Node()
        }
        node=node.children[char]
    }
    node.end=true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
     let node=this.root
    for(let i=0;i<word.length;i++){
        let char=word[i]
        if(!node.children[char]){
        return false
        }
        node=node.children[char]
    }
    return node.end
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node=this.root
    for(let i=0;i<prefix.length;i++){
        let char=prefix[i]
        if(!node.children[char]){
            return false
        }
        node=node.children[char]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */