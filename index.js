let pion1 = document.querySelector("#pion1")
let pion2 = document.querySelector("#pion2")
let pion3 = document.querySelector("#pion3")
let pion4 = document.querySelector("#pion4")
let pion5 = document.querySelector("#pion5")
let pion6 = document.querySelector("#pion6")
let pion7 = document.querySelector("#pion7")
let pion8 = document.querySelector("#pion8")
let pion11 = document.querySelector("#pion11")
let pion12 = document.querySelector("#pion12")
let pion13 = document.querySelector("#pion13")
let pion14 = document.querySelector("#pion14")
let pion15 = document.querySelector("#pion15")
let pion16 = document.querySelector("#pion16")
let pion9 = document.querySelector("#pion9")
let pion10 = document.querySelector("#pion10")
const cav1 = document.querySelector("#cav1")
const cav2 = document.querySelector("#cav2")
const cav3 = document.querySelector("#cav3")
const cav4 = document.querySelector("#cav4")
const fou1 = document.querySelector("#fou1")
const fou2 = document.querySelector("#fou2")
const fou3 = document.querySelector("#fou3")
const fou4 = document.querySelector("#fou4")
const tour1 = document.querySelector("#tour1")
const tour2 = document.querySelector("#tour2")
const tour3 = document.querySelector("#tour3")
const tour4 = document.querySelector("#tour4")
const roi1 = document.querySelector("#roi1")
const roi2 = document.querySelector("#roi2")
const reine1 = document.querySelector("#reine1")
const reine2 = document.querySelector("#reine2")
const reine3 = document.querySelector("#reine3")
const cases = document.querySelector(".cases")
const pionBlanc = document.querySelector('.pionBlanc')
const pionNoir = document.querySelector('.pionNoir')
const chessboard = document.querySelector(".chessboard")
const pionsB = document.querySelector(".pionsB")
const pionsN = document.querySelector(".pionsN")
const roi = document.querySelector(".roi")
const reine = document.querySelector(".reine")
const fou = document.querySelector(".fou")
const tour = document.querySelector(".tour")
const cav = document.querySelector(".cav")
const roiN = document.querySelector(".roiN")
const reineN = document.querySelector(".reineN")
const fouN = document.querySelector(".fouN")
const tourN = document.querySelector(".tourN")
const cavN = document.querySelector(".cavN")
const reset = document.querySelector(".reset")
const reine4 = document.querySelector("#reine4")
const reine5 = document.querySelector("#reine5")
const reine6 = document.querySelector("#reine6")
const reine7 = document.querySelector("#reine7")
const reine8 = document.querySelector("#reine8")
const reine9 = document.querySelector("#reine9")
const reine10 = document.querySelector("#reine10")
const reine11 = document.querySelector("#reine11")
const reine12 = document.querySelector("#reine12")
const reine13 = document.querySelector("#reine13")
const reine14 = document.querySelector("#reine14")
const reine15 = document.querySelector("#reine15")
const reine16 = document.querySelector("#reine16")
const reine17 = document.querySelector("#reine17")
const reine18 = document.querySelector("#reine18")
let reineB = [reine3,reine4,reine5,reine6,reine7,reine8,reine9,reine10]
let reinesN = [reine11,reine12,reine13,reine14,reine15,reine16,reine17,reine18]
pion1.className="a02";
pion2.className="a12";
pion3.className="a22";
pion4.className="a32";
pion5.className="a42";
pion6.className="a52";
pion7.className="a62";
pion8.className="a72";
pion9.className="a67";
pion10.className="a77";
pion11.className="a07";
pion12.className="a17";
pion13.className="a27";
pion14.className="a37";
pion15.className="a47";
pion16.className="a57";
cav1.className="a11";
cav2.className="a61";
tour1.className="a01";
tour2.className="a71";
fou1.className="a21";
fou2.className="a51";
roi1.className="a41";
reine1.className="a31";
cav3.className="a18";
cav4.className="a68";
tour3.className="a08";
tour4.className="a78";
fou3.className="a28";
fou4.className="a58";
roi2.className="a48";
reine2.className="a38";
reine3.className="a00";
reine4.className="a00";
reine5.className="a00";
reine6.className="a00";
reine7.className="a00";
reine8.className="a00";
reine9.className="a00";
reine10.className="a00"
reine11.className="a00"
reine12.className="a00"
reine13.className="a00"
reine14.className="a00"
reine15.className="a00"
reine16.className="a00"
reine17.className="a00"
reine18.className="a00"

let vide1 = [false,false,true,true,true,true,false,false]
let vide2 = [false,false,true,true,true,true,false,false]
let vide3 = [false,false,true,true,true,true,false,false]
let vide4 = [false,false,true,true,true,true,false,false]
let vide5 = [false,false,true,true,true,true,false,false]
let vide6 = [false,false,true,true,true,true,false,false]
let vide7 = [false,false,true,true,true,true,false,false]
let vide8 = [false,false,true,true,true,true,false,false]
let empty = [vide1,vide2,vide3,vide4,vide5,vide6,vide7,vide8]

let dgr1 = [true,true,true,true,true,true,true,true]
let dgr2 = [true,true,true,true,true,true,true,true]
let dgr3 = [true,true,true,true,true,true,true,true]
let dgr4 = [true,true,true,true,true,true,true,true]
let dgr5 = [true,true,true,true,true,true,true,true]
let dgr6 = [true,true,true,true,true,true,true,true]
let dgr7 = [true,true,true,true,true,true,true,true]
let dgr8 = [true,true,true,true,true,true,true,true]
let dangerB = [dgr1,dgr2,dgr3,dgr4,dgr5,dgr6,dgr7,dgr8]
let dangerN = [dgr1,dgr2,dgr3,dgr4,dgr5,dgr6,dgr7,dgr8]
let echecBlancs = [dgr1,dgr2,dgr3,dgr4,dgr5,dgr6,dgr7,dgr8]
let echecNoirs = [dgr1,dgr2,dgr3,dgr4,dgr5,dgr6,dgr7,dgr8]
let selecteur = ""
let direction = ""
let turn = true
let autorisation= ""
let positionA = []
let positionA2 = []
let positionD = []
let positionD2 = []
let prom = 0
let promN = 0
let imo= [true,true,true,true,true,true]
let trace=""
echecB(empty,0)
echecN(empty,0)



function echecBl(){
    echecB(empty,1)
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if(empty[i][j] && dangerB[i][j]){
                echecBlancs[i][j]=true

            }
            else{
                echecBlancs[i][j]=false
            }
        }
    }
    echecB(empty,0)
    
}
function echecNr(){
    echecN(empty,1)
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if(empty[i][j] && dangerN[i][j]){
                echecNoirs[i][j]=true

            }
            else{
                echecNoirs[i][j]=false
            }
        }
    }
    echecN(empty,0)
    
}

function abs(p){
    return parseInt(p[1])
}
function ord(p){
    return parseInt(p[2])
}


function deplacement(p,c,a){
    if(legit(a,c,p) && trajectoire(p,c)){
        empty[positionD2[0]][positionD2[1]]=true
        empty[positionA2[0]][positionA2[1]]=false
        echecB(empty,0)
        echecN(empty,0)
        if((turn && dangerN[position(roi1)[0]][position(roi1)[1]] )||(turn==false && dangerB[position(roi2)[0]][position(roi2)[1]])){
            p.className=c
            if (p==tour1){
                imo[0]=false
            }
            else if(p==tour2){
                imo[1]=false
            }
            else if(p==tour3){
                imo[2]=false
            }
            else if(p==tour4){
                imo[3]=false
            }
            if(autorisation==pionsB && positionA[1]==8){
            promotionB(selecteur)
            console.log(selecteur)
            }
            if(autorisation==pionsN && positionA[1]==1){
            promotionN(selecteur)
            }
            turn=!turn
            echecB(empty,0)
            echecN(empty,0)
            if(!dangerB[position(roi2)[0]][position(roi2)[1]]){
                echecMathNoir()
            }
            if(!dangerN[position(roi1)[0]][position(roi1)[1]]){
                echecMath()
            }

        }
        else{
            empty[positionD2[0]][positionD2[1]]=false
            empty[positionA2[0]][positionA2[1]]=true
            echecB(empty,0)
            echecN(empty,0)
        }
    }
    selecteur=""
}
function deplacementlegit(p,c,a){
    if(legit(a,c,p)){
        empty[positionD2[0]][positionD2[1]]=true
        empty[positionA2[0]][positionA2[1]]=false
        p.className=c
        turn=!turn
        if(autorisation==pionsB && positionA[1]==8){
            promotionB(selecteur)
            console.log(selecteur)
        }
        if(autorisation==pionsN && positionA[1]==1){
            promotionN(selecteur)
        }
        if(!dangerB[position(roi2)[0]][position(roi2)[1]]){
            echecMathNoir()
        }
        if(!dangerN[position(roi1)[0]][position(roi1)[1]]){
            echecMath()
        }


    }
    selecteur=""
    echecB(empty,0)
    echecN(empty,0)
}
function deplacementKing(p,c,a){
    if(legit(a,c,p) && trajectoire(p,c)){
        if((p==roi1 && dangerN[positionA2[0]][positionA2[1]])||(p==roi2 && dangerB[positionA2[0]][positionA2[1]])){
            empty[positionD2[0]][positionD2[1]]=true
            empty[positionA2[0]][positionA2[1]]=false
            p.className=c
            if(p==roi1){
                imo[4]=false
            }
            else if(p==roi2){
                imo[5]=false
            }
            turn=!turn
            echecB(empty,0)
            echecN(empty,0)
            if(!dangerB[position(roi2)[0]][position(roi2)[1]]){
                echecMathNoir()
            }
            if(!dangerN[position(roi1)[0]][position(roi1)[1]]){
                echecMath()
            }

        }
        
    }
    selecteur=""

}
function rock(r,t){
    if(r==roi1 && imo[4] && dangerN[4][0]){
        if(t==tour1 && imo[0] && empty[1][0] && empty[2][0] && empty[3][0] && dangerN[0][0] && dangerN[1][0] && dangerN[2][0] && dangerN[3][0]){
            roi1.className="a21"
            tour1.className="a31"
            empty[2][0]=false
            empty[3][0]=false
            empty[0][0]=true
            empty[4][0]=true
            turn=!turn
            selecteur=""
            imo[4]=false
        }
        else if(imo[1] && empty[5][0] && empty[6][0]&& dangerN[7][0] && dangerN[6][0] && dangerN[5][0]){
            roi1.className="a61"
            tour2.className="a51"
            empty[5][0]=false
            empty[6][0]=false
            empty[7][0]=true
            empty[4][0]=true
            turn=!turn
            selecteur=""
            imo[4]=false
        }
        if(!dangerB[position(roi2)[0]][position(roi2)[1]]){
            echecMathNoir()
        }

    }
    else if(imo[5] && dangerB[4][7]){
        if(t==tour4 && imo[3] && empty[5][7] && empty[6][7] && dangerB[5][7] && dangerB[6][7] && dangerB[7][7]){
            roi2.className="a68"
            tour4.className="a58"
            empty[5][7]=false
            empty[6][7]=false
            empty[4][7]=true
            empty[7][7]=true
            turn=!turn
            selecteur=""
            imo[5]=false
        }
        else if(imo[2] && empty[1][7] && empty[2][7] && empty[3][7] && dangerB[0][7] && dangerB[1][7] && dangerB[2][7] && dangerB[3][7]){
            roi2.className="a28"
            tour3.className="a38"
            empty[2][7]=false
            empty[3][7]=false
            empty[0][7]=true
            empty[4][7]=true
            turn=!turn
            selecteur=""
            imo[5]=false
        }
        if(!dangerN[position(roi1)[0]][position(roi1)[1]]){
            echecMath()
        }

    }
    echecB(empty,0)
    echecN(empty,0)
}


function position(p){
    return [abs(p.getAttribute("class")),ord(p.getAttribute("class"))-1]
}
function modx(p,q){
    if(p<8 && p>-1){
        return p
    }
    else if(p<0){
        return 2*q-p
    }
    return p-(p-q)*2
}
function manger(){
    if(selecteur!=""){
        direction=event.target.getAttribute("class")
        positionD2.push(abs(selecteur.getAttribute("class")))
        positionD2.push(ord(selecteur.getAttribute("class"))-1)
        positionA2.push(abs(direction))
        positionA2.push(ord(direction)-1)
        if(legit(autorisation,direction,selecteur) && (autorisation==pionsB || autorisation==pionsN)){
            deplacementlegit(selecteur,direction,autorisation)
            event.target.className="mort"

            
            empty[positionD2[0]][positionD2[1]]=true
        }
        empty[positionA2[0]][positionA2[1]]=true
        if(legit(autorisation,direction,selecteur) && trajectoire(selecteur,direction) && autorisation!=pionsB && autorisation!=pionsN){
            event.target.className="mort"
            deplacement(selecteur,direction,autorisation)
            empty[positionD2[0]][positionD2[1]]=true
            empty[positionA2[0]][positionA2[1]]=false
        }
    }
}


function legit(p,q,r){
    positionD.push(abs(r.getAttribute("class")))
    positionD.push(ord(r.getAttribute("class")))
    positionA.push(abs(q))
    positionA.push(ord(q))
    if(p==pionsB){
        if(positionA[1]==positionD[1]+1 && positionA[0]==positionD[0] && empty[positionA[0]][positionA[1]-1]){
            return true
        }
        else if(Math.abs(positionA[0]-positionD[0])==1 && Math.abs(positionA[1]-positionD[1])==1 && !empty[positionA[0]][positionA[1]-1] && positionA[1]>positionD[1]){
            return true
        } 
        else if(positionD[1]==2 && positionA[1]==4 && positionA[0]==positionD[0] && empty[positionA[0]][positionA[1]-1]){
            return true
        }
    }
    else if(p==pionsN){
        if(positionA[1]==positionD[1]-1 && positionA[0]==positionD[0] && empty[positionA[0]][positionA[1]-1]){
            return true
        }
        else if(Math.abs(positionA[0]-positionD[0])==1 && Math.abs(positionA[1]-positionD[1])==1 && !empty[positionA[0]][positionA[1]-1] && positionA[1]<positionD[1]){
            return true
        } 
        else if(positionD[1]==7 && positionA[1]==5 && positionA[0]==positionD[0] && empty[positionA[0]][positionA[1]-1]){
            return true
        }
    }
    else if(p==roi ||p==roiN){
        if(Math.abs(positionA[0]-positionD[0])<=1 && Math.abs(positionA[1]-positionD[1])<=1){
            return true
        }
    }
    else if(p==reine||p==reineN){
        if(Math.abs(positionA[0]-positionD[0])== Math.abs(positionA[1]-positionD[1])){
            return true
        }
        else if(positionA[0]==positionD[0] ||positionA[1]==positionD[1]){
            return true
        }

    }
    else if(p==tour ||p==tourN){
        if(positionA[0]==positionD[0] ||positionA[1]==positionD[1]){
            return true
        }
    }
    else if(p==cav ||p== cavN){
        if((Math.abs(positionA[0]-positionD[0])==2 || Math.abs(positionA[1]-positionD[1])==2)&&(Math.abs(positionA[0]-positionD[0])==1 || Math.abs(positionA[1]-positionD[1])==1)){
            return true
        }
    }
    else if(p==fou ||p== fouN){
        if(Math.abs(positionA[0]-positionD[0])== Math.abs(positionA[1]-positionD[1])){
            return true
        }
    }
    return false
}
function trajectoire(q,r){
    positionD2.push(abs(q.getAttribute("class")))
    positionD2.push(ord(q.getAttribute("class"))-1)
    positionA2.push(abs(r))
    positionA2.push(ord(r)-1)
    let x = positionA2[0]-positionD2[0]
    let y = positionA2[1]-positionD2[1]
    if(x !=0 && y!=0){
        if(x==y && x>0){
            for(let i = 1; i < x+1; i++){
                if(!empty[positionD2[0]+i][positionD2[1]+i]){
                    return false
                }
            }
        }
        if(x==y && x<0){
            for(let i = -1; i > x-1; i--){
                if(!empty[positionD2[0]+i][positionD2[1]+i]){
                    return false
                }
            }
        }
        if(x==-y && x>0){
            for(let i = 1; i < x+1; i++){
                if(!empty[positionD2[0]+i][positionD2[1]-i]){
                    return false
                }
            }
        }
        if(x==-y && x<0){
            for(let i = -1; i > x-1; i--){
                if(!empty[positionD2[0]+i][positionD2[1]-i]){
                    return false
                }
            }
        }
    }
    else if(x==0) {
        if(y>0){
            for (let i = 1; i < y+1 ; i++){
                if(!empty[positionD2[0]][positionD2[1]+i]){
                    return false
                }
            }   
        }
        if(y<0){
            for (let i = -1; i > y-1 ; i--){
                if(!empty[positionD2[0]][positionD2[1]+i]){
                    return false
                }
            }
        }
    }
    else if(y==0) {
        if(x>0){
            for (let i = 1; i < x+1 ; i++){
                if(!empty[positionD2[0]+i][positionD2[1]]){
                    return false
                }
            }   
        }
        if(x<0){
            for (let i = -1; i > x-1 ; i--){
                if(!empty[positionD2[0]+i][positionD2[1]]){
                    return false
                }
            }
        }
    }
    return true
}


function promotionB(p){
    p.className="mort"
    reineB[prom].className=direction
    
    console.log("youpi")
    prom++
}
function promotionN(p){
    reinesN[promN].className=direction
    p.className="mort"
    console.log("youpi")
    promN++
}


chessboard.onclick = function() {
    positionA=[]
    positionD=[]
    positionA2=[]
    positionD2=[]
    if (event.target.parentNode.parentNode.getAttribute("class")=="pionsBlancs"){
        if(turn){
            selecteur = event.target 
            autorisation = event.target.parentNode
        }
        else{
            manger()
            
        }
    }
    else if (event.target.parentNode.parentNode.getAttribute("class")=="pionsNoirs"){
        if(!turn){
            selecteur = event.target
            autorisation = event.target.parentNode
        }
        else {
            manger()
            
        }  
    }
    else if (event.target.parentNode.getAttribute("class")=="cases"){
        if(selecteur!=""){
            direction = event.target.getAttribute("id")
            if(selecteur==roi1){
                if(direction=="a21"){
                    rock(roi1,tour1)
                }
                else if(direction=="a61"){
                    rock(roi1,tour2)
                }
                deplacementKing(selecteur,direction,autorisation)
            }
            else if(selecteur==roi2){
                if(direction=="a28"){
                    rock(roi2,tour3)
                }
                else if(direction=="a68"){
                    rock(roi2,tour4)
                }
                deplacementKing(selecteur,direction,autorisation)
            }
            else{
                deplacement(selecteur,direction,autorisation)
            }
        }
    }
}


function echecPion(p,e){
    if(p.getAttribute("class")!="mort" && p.getAttribute("class")!="a00" && e==0){
        let initialpion1= position(p)
        dangerB[Math.abs(initialpion1[0]-1)][initialpion1[1]+1]=false
        dangerB[modx(initialpion1[0]+1,initialpion1[0])][initialpion1[1]+1]=false
    }
    else if (p.getAttribute("class")!="mort" && p.getAttribute("class")!="a00"){
        let initialpion1= position(p)
        dangerB[initialpion1[0]][initialpion1[1]+1]=false
        if(initialpion1[1]==1){
            dangerB[initialpion1[0]][initialpion1[1]+2]=false
        }

    }
}
function echecPionN(p,e){
    if(p.getAttribute("class")!="mort" && p.getAttribute("class")!="a00" && e==0){
        let initialpion1= position(p)
        dangerN[Math.abs(initialpion1[0]-1)][initialpion1[1]-1]=false
        dangerN[modx(initialpion1[0]+1,initialpion1[0])][initialpion1[1]-1]=false
    }
    else if (p.getAttribute("class")!="mort" && p.getAttribute("class")!="a00"){
        let initialpion1= position(p)
        dangerN[initialpion1[0]][initialpion1[1]-1]=false
        if(initialpion1[1]==6){
            dangerN[initialpion1[0]][initialpion1[1]-2]=false
        }
    }
    return e
}
function echecCav(p,d){
    if(p.getAttribute("class")!="mort" && p.getAttribute("class")!="a00"){
        let initialcav1=position(p)
        d[modx(initialcav1[0]-1,initialcav1[0])][modx(initialcav1[1]+2,initialcav1[1])]=false
        d[modx(initialcav1[0]-1,initialcav1[0])][modx(initialcav1[1]-2,initialcav1[1])]=false
        d[modx(initialcav1[0]-2,initialcav1[0])][modx(initialcav1[1]+1,initialcav1[1])]=false
        d[modx(initialcav1[0]-2,initialcav1[0])][modx(initialcav1[1]-1,initialcav1[1])]=false
        d[modx(initialcav1[0]+1,initialcav1[0])][modx(initialcav1[1]+2,initialcav1[1])]=false
        d[modx(initialcav1[0]+1,initialcav1[0])][modx(initialcav1[1]-2,initialcav1[1])]=false
        d[modx(initialcav1[0]+2,initialcav1[0])][modx(initialcav1[1]-1,initialcav1[1])]=false
        d[modx(initialcav1[0]+2,initialcav1[0])][modx(initialcav1[1]+1,initialcav1[1])]=false
    }
}
function echecTour(p,d,e){
    if(p.getAttribute("class")!="mort" && p.getAttribute("class")!="a00"){
        let initialtour1 = position(p)
        for(let i = initialtour1[0]+1; i < 8; i++){
            if(e[i][initialtour1[1]]==false){
                d[i][initialtour1[1]]=false
                i=8
            }
            else{
                d[i][initialtour1[1]]=false
            }
        }
        for(let i = initialtour1[0]-1; i > -1; i--){
            if(e[i][initialtour1[1]]==false){
                d[i][initialtour1[1]]=false
                i=-1
            }
            else{
                d[i][initialtour1[1]]=false
            }
        }
        for(let i = initialtour1[1]+1; i < 8; i++){
            if(e[initialtour1[0]][i]==false){
                d[initialtour1[0]][i]=false
                i=8
            }
            else{
                d[initialtour1[0]][i]=false
            }
        }
        for(let i = initialtour1[1]-1; i > -1; i--){
            if(e[initialtour1[0]][i]==false){
                d[initialtour1[0]][i]=false
                i=-1
            }
            else{
                d[initialtour1[0]][i]=false
            }
        }
    }

}
function echecFou(p,d,e){
    if(p.getAttribute("class")!="mort" && p.getAttribute("class")!="a00"){
        let initialfou1 = position(p)
        if(initialfou1[0]<7 && initialfou1[1]<7){
            for(let i = 1; i<8 ; i++){
                if(e[initialfou1[0]+i][initialfou1[1]+i]==false || initialfou1[0]+i==7 || initialfou1[1]+i==7){
                    d[initialfou1[0]+i][initialfou1[1]+i]=false
                    i=8
                }
                else{
                    d[initialfou1[0]+i][initialfou1[1]+i]=false
                }
            }
        }
        if(initialfou1[0]>0 && initialfou1[1]<7){
            for(let i = 1; i<8 ; i++){
                if(e[initialfou1[0]-i][initialfou1[1]+i]==false || initialfou1[0]-i==0 || initialfou1[1]+i==7){
                    d[initialfou1[0]-i][initialfou1[1]+i]=false
                    i=8
                }
                else{
                    d[initialfou1[0]-i][initialfou1[1]+i]=false
                }
            }
        }
        if(initialfou1[0]>0 && initialfou1[1]>0){
            for(let i = 1; i<8 ; i++){
                if(e[initialfou1[0]-i][initialfou1[1]-i]==false || initialfou1[0]-i==0 || initialfou1[1]-i==0){
                    d[initialfou1[0]-i][initialfou1[1]-i]=false
                    i=8
                }
                else{
                    d[initialfou1[0]-i][initialfou1[1]-i]=false
                }
            }
        }
        if(initialfou1[0]<7 && initialfou1[1]>0){
            for(let i = 1; i<8 ; i++){
                if(e[initialfou1[0]+i][initialfou1[1]-i]==false || initialfou1[0]+i==7 || initialfou1[1]-i==0){
                    d[initialfou1[0]+i][initialfou1[1]-i]=false
                    i=8
                }
                else{
                    d[initialfou1[0]+i][initialfou1[1]-i]=false
                }
            }
        }
    }

}
function echecReine(p,d,e){
    if(p.getAttribute("class")!="mort" && p.getAttribute("class")!="a00"){
        let initialtour1 = position(p)
        let initialfou1 = position(p)
        for(let i = initialtour1[0]+1; i < 8; i++){
            if(e[i][initialtour1[1]]==false){
                d[i][initialtour1[1]]=false
                i=8
            }
            else{
                d[i][initialtour1[1]]=false
            }
        }
        for(let i = initialtour1[0]-1; i > -1; i--){
            if(e[i][initialtour1[1]]==false){
                d[i][initialtour1[1]]=false
                i=-1
            }
            else{
                d[i][initialtour1[1]]=false
            }
        }
        for(let i = initialtour1[1]+1; i < 8; i++){
            if(e[initialtour1[0]][i]==false){
                d[initialtour1[0]][i]=false
                i=8
            }
            else{
                d[initialtour1[0]][i]=false
            }
        }
        for(let i = initialtour1[1]-1; i > -1; i--){
            if(e[initialtour1[0]][i]==false){
                d[initialtour1[0]][i]=false
                i=-1
            }
            else{
                d[initialtour1[0]][i]=false
            }
        } 

        if(initialfou1[0]<7 && initialfou1[1]<7){
            for(let i = 1; i<8 ; i++){
                if(e[initialfou1[0]+i][initialfou1[1]+i]==false || initialfou1[0]+i==7 || initialfou1[1]+i==7){
                    d[initialfou1[0]+i][initialfou1[1]+i]=false
                    i=8
                }
                else{
                    d[initialfou1[0]+i][initialfou1[1]+i]=false
                }
            }
        }
        if(initialfou1[0]>0 && initialfou1[1]<7){
            for(let i = 1; i<8 ; i++){
                if(e[initialfou1[0]-i][initialfou1[1]+i]==false || initialfou1[0]-i==0 || initialfou1[1]+i==7){
                    d[initialfou1[0]-i][initialfou1[1]+i]=false
                    i=8
                }
                else{
                    d[initialfou1[0]-i][initialfou1[1]+i]=false
                }
            }
        }
        if(initialfou1[0]>0 && initialfou1[1]>0){
            for(let i = 1; i<8 ; i++){
                if(e[initialfou1[0]-i][initialfou1[1]-i]==false || initialfou1[0]-i==0 || initialfou1[1]-i==0){
                    d[initialfou1[0]-i][initialfou1[1]-i]=false
                    i=8
                }
                else{
                    d[initialfou1[0]-i][initialfou1[1]-i]=false
                }
            }
        }
        if(initialfou1[0]<7 && initialfou1[1]>0){
            for(let i = 1; i<8 ; i++){
                if(e[initialfou1[0]+i][initialfou1[1]-i]==false || initialfou1[0]+i==7 || initialfou1[1]-i==0){
                    d[initialfou1[0]+i][initialfou1[1]-i]=false
                    i=8
                }
                else{
                    d[initialfou1[0]+i][initialfou1[1]-i]=false
                }
            }
        }
    }

}
function echecRoi(p,d,e){
    if(p.getAttribute("class")!="mort" && p.getAttribute("class")!="a00" && e==0){
        let initialroi1=position(p)
        d[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]=false
        d[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]=false
        d[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1],initialroi1[1])]=false
        d[modx(initialroi1[0],initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]=false
        d[modx(initialroi1[0],initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]=false
        d[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]=false
        d[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]=false
        d[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1],initialroi1[1])]=false
    }
}


function echecB(e,a){
    dgr1 = [true,true,true,true,true,true,true,true]
    dgr2 = [true,true,true,true,true,true,true,true]
    dgr3 = [true,true,true,true,true,true,true,true]
    dgr4 = [true,true,true,true,true,true,true,true]
    dgr5 = [true,true,true,true,true,true,true,true]
    dgr6 = [true,true,true,true,true,true,true,true]
    dgr7 = [true,true,true,true,true,true,true,true]
    dgr8 = [true,true,true,true,true,true,true,true]
    dangerB = [dgr1,dgr2,dgr3,dgr4,dgr5,dgr6,dgr7,dgr8]
    echecPion(pion1,a)
    echecPion(pion2,a)
    echecPion(pion3,a)
    echecPion(pion4,a)
    echecPion(pion5,a)
    echecPion(pion6,a)
    echecPion(pion7,a)
    echecPion(pion8,a)  
    echecCav(cav1,dangerB)
    echecCav(cav2,dangerB)
    echecTour(tour1,dangerB,e)
    echecTour(tour2,dangerB,e)
    echecFou(fou1,dangerB,e)
    echecFou(fou2,dangerB,e)
    echecReine(reine1,dangerB,e)
    echecReine(reine3,dangerB,e)
    echecReine(reine4,dangerB,e)
    echecReine(reine5,dangerB,e)
    echecReine(reine6,dangerB,e)
    echecReine(reine7,dangerB,e)
    echecReine(reine8,dangerB,e)
    echecReine(reine9,dangerB,e)
    echecReine(reine10,dangerB,e)
    echecRoi(roi1,dangerB,a)
}
function echecN(e,a){
    dgr1 = [true,true,true,true,true,true,true,true]
    dgr2 = [true,true,true,true,true,true,true,true]
    dgr3 = [true,true,true,true,true,true,true,true]
    dgr4 = [true,true,true,true,true,true,true,true]
    dgr5 = [true,true,true,true,true,true,true,true]
    dgr6 = [true,true,true,true,true,true,true,true]
    dgr7 = [true,true,true,true,true,true,true,true]
    dgr8 = [true,true,true,true,true,true,true,true]
    dangerN = [dgr1,dgr2,dgr3,dgr4,dgr5,dgr6,dgr7,dgr8]
    echecPionN(pion11,a)
    echecPionN(pion12,a)
    echecPionN(pion13,a)
    echecPionN(pion14,a)
    echecPionN(pion15,a)
    echecPionN(pion16,a)
    echecPionN(pion9,a)
    echecPionN(pion10,a)  
    echecCav(cav3,dangerN)
    echecCav(cav4,dangerN)
    echecTour(tour3,dangerN,e)
    echecTour(tour4,dangerN,e)
    echecFou(fou3,dangerN,e)
    echecFou(fou4,dangerN,e)
    echecReine(reine2,dangerN,e)
    echecReine(reine13,dangerN,e)
    echecReine(reine14,dangerN,e)
    echecReine(reine15,dangerN,e)
    echecReine(reine16,dangerN,e)
    echecReine(reine17,dangerN,e)
    echecReine(reine18,dangerN,e)
    echecReine(reine11,dangerN,e)
    echecReine(reine12,dangerN,e)
    echecRoi(roi2,dangerN,a)
}


function echecMath(){
    let initialroi1=position(roi1)
    if(dangerN[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]==false || (empty[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0]+1,initialroi1[0]) + (modx(initialroi1[1]+1,initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsBlancs")){
        if(dangerN[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]==false || (empty[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0]+1,initialroi1[0]) + (modx(initialroi1[1]-1,initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsBlancs")){
            if(dangerN[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1],initialroi1[1])]==false || (empty[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1],initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0]+1,initialroi1[0]) + (modx(initialroi1[1],initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsBlancs")){
                if(dangerN[modx(initialroi1[0],initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]==false || (empty[modx(initialroi1[0],initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0],initialroi1[0]) + (modx(initialroi1[1]+1,initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsBlancs")){
                    if(dangerN[modx(initialroi1[0],initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]==false || (empty[modx(initialroi1[0],initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0],initialroi1[0]) + (modx(initialroi1[1]-1,initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsBlancs")){
                        if(dangerN[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]==false || (empty[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0]-1,initialroi1[0]) + (modx(initialroi1[1]+1,initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsBlancs")){
                            if(dangerN[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]==false || (empty[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0]-1,initialroi1[0]) + (modx(initialroi1[1]-1,initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsBlancs")){
                                if(dangerN[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1],initialroi1[1])]==false || (empty[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1],initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0]-1,initialroi1[0]) + (modx(initialroi1[1],initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsBlancs")){
                                    if(!dangerN[initialroi1[0]][initialroi1[1]]){
                                        echecBl()
                                        echecN(echecBlancs,0)
                                        if(!dangerN[initialroi1[0]][initialroi1[1]]){
                                            if(dangerB[positionA2[0]][positionA2[1]]){
                                                alert("echec&math")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}
function echecMathNoir(){
    let initialroi1=position(roi2)
    if(dangerB[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]==false || (empty[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0]+1,initialroi1[0]) + (modx(initialroi1[1]+1,initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsNoirs")){
        if(dangerB[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]==false || (empty[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0]+1,initialroi1[0]) + (modx(initialroi1[1]-1,initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsNoirs")){
            if(dangerB[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1],initialroi1[1])]==false || (empty[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1],initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0]+1,initialroi1[0]) + (modx(initialroi1[1],initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsNoirs")){
                if(dangerB[modx(initialroi1[0],initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]==false || (empty[modx(initialroi1[0],initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0],initialroi1[0]) + (modx(initialroi1[1]+1,initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsNoirs")){
                    if(dangerB[modx(initialroi1[0],initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]==false || (empty[modx(initialroi1[0],initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0],initialroi1[0]) + (modx(initialroi1[1]-1,initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsNoirs")){
                        if(dangerB[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]==false || (empty[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0]-1,initialroi1[0]) + (modx(initialroi1[1]+1,initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsNoirs")){
                            if(dangerB[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]==false || (empty[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0]-1,initialroi1[0]) + (modx(initialroi1[1]-1,initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsNoirs")){
                                if(dangerB[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1],initialroi1[1])]==false || (empty[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1],initialroi1[1])]==false && document.getElementsByClassName("a"+modx(initialroi1[0]-1,initialroi1[0]) + (modx(initialroi1[1],initialroi1[1])+1))[0].parentNode.parentNode.className=="pionsNoirs")){
                                    if(!dangerB[initialroi1[0]][initialroi1[1]]){
                                        echecNr()
                                        echecB(echecNoirs,0)
                                        if(!dangerB[initialroi1[0]][initialroi1[1]]){
                                            if(dangerN[positionA2[0]][positionA2[1]]){
                                                alert("echec&math")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}