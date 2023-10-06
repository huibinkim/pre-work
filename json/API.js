
// 서버 url
const serverUrl = 'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock';


// const response = fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock')
// //fetch는 비동기 함수이므로 위서터 아래로 실행됨.
//     .then((res) => { res.json();
//         console.log(res.json());
//     })
//     .then((obj)=>{
//         console.log(obj)

//     })
//     .catch((error)=>{
//         console.log(error);
//     })
const txt = document.querySelector('#wrap');

const getData = async() => {
    try{
        const res = await fetch(serverUrl);
        const data = await res.json();
        console.log(data)
        txt.innerHTML=
            data.map(v => `${v.id} ${v.name} <br>`).join("");
        
            
    } catch(error){
        console.log(`error: ${error}`)
    }
    
}
getData();