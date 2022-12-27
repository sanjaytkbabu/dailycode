let t1 = (i: number) => {
    console.log(i)
}



let test = () => {

for(let i = 0; i < 10 ; i++){
    t1(i);
}

}

//test();

let test1 = () => {

    let input:string = 'sanjay';

    let valsan:string[] = input.split('');

    for(let i = valsan.length-1; i >=0  ; i--){
        valsan[i];
    }
    
    }

    test1();

    let input1:string = 'sanjay';

    let valsan:string[] = input1.split('');

    for(let i = valsan.length-1; i >=0  ; i--){
        console.log(valsan[i]);
    }




    let test2 = () => {

        let s = "sanjay";
    
       // let s2 = s.split("");
    
        for(let i = s.length-1; i >=0 ; i--){
            console.log(s[i]);
        }
        
        }

       test2();