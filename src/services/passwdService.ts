export default function generatePasswd(){
    let passwd:string = ''
    let characters: string = '1Ab3C4d5eFhIlMnO#Gu0W?9y!7@6&8*Xz$r%T'
    let passwdLength = 8

    for(let index=0; index < passwdLength; index++){
        passwd +=characters.charAt(
            Math.floor(Math.random() * characters.length)            
            )
    }

    return passwd
}