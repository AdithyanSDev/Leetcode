/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result=''
    let open=false
    let stack=[]
    for(let p of s){
        if(p==='('&& !open){
            open=true
        }else if(p==='('&& open){
            stack.push(')')
            result +=p
        }else if(p===')'&& stack.length){
            result +=stack.pop()
        }else if(p===')'&& !stack.length){
            open=false
        }
    }
    return result
};