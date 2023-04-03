const reine = document.querySelector(".reineB")
const fou = document.querySelector(".fouB")
const tour = document.querySelector(".tourB")
const cav = document.querySelector(".cavB")
const reineN = document.querySelector(".reineN")
const fouN = document.querySelector(".fouN")
const tourN = document.querySelector(".tourN")
const cavN = document.querySelector(".cavN")
const tour1 = document.querySelector("#tour1")
const tour2 = document.querySelector("#tour2")
const tour3 = document.querySelector("#tour3")
const tour4 = document.querySelector("#tour4")
const roi1 = document.querySelector('#roi1')
const roi2 = document.querySelector('#roi2')

const white = document.querySelector('.whiteplayer')
const black = document.querySelector('.blackplayer')

const whitePromotion = document.querySelector('.whitePromotion')
const blackPromotion = document.querySelector('.blackPromotion')

const endGameReview = document.querySelector(".endGameReview")
const whiteWin = document.querySelector('.whiteWin')
const blackWin = document.querySelector('.blackWin')

const chessboard = document.querySelector(".chessboard")



let vide1 = ['white','white',true,true,true,true,'black','black']
let vide2 = ['white','white',true,true,true,true,'black','black']
let vide3 = ['white','white',true,true,true,true,'black','black']
let vide4 = ['white','white',true,true,true,true,'black','black']
let vide5 = ['white','white',true,true,true,true,'black','black']
let vide6 = ['white','white',true,true,true,true,'black','black']
let vide7 = ['white','white',true,true,true,true,'black','black']
let vide8 = ['white','white',true,true,true,true,'black','black']
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
let turn = true
let autorisation= ""
let imo= [true,true,true,true,true,true]
let trace=""
let endGame = false

chessboard.onclick = function (event) {
    if(endGame){return}
    if(whitePromotion.style.display == 'block' || blackPromotion.style.display == 'block'){return}

    if (event.target.parentNode.parentNode.getAttribute("class")=="pionsBlancs"){
        if(turn){
            selecteur = event.target 
            autorisation = event.target.parentNode.className
        }
        else{
            let direction = event.target.getAttribute("style")
            direction= getPosition(direction)
            manger(direction, event)
            selecteur=''
        }
    }
    else if (event.target.parentNode.parentNode.getAttribute("class")=="pionsNoirs"){

        if(!turn){
            selecteur = event.target
            autorisation = event.target.parentNode.className
        }
        else {
            let direction = event.target.getAttribute("style")
            direction= getPosition(direction)
            manger(direction, event)
            selecteur=''
            
        }  
    }
    else if (event.target.parentNode.getAttribute("class")=="cases"){

        if(selecteur!=""){
            let direction = event.target.getAttribute("style")
            direction= getPosition(direction)
            if(selecteur==roi1){
                if(arraysEqual(direction, [2,0])){
                    rock(selecteur,tour1)
                }
                else if(arraysEqual(direction, [6,0])){
                    rock(selecteur,tour2)
                }
                else{deplacementKing(selecteur,direction,autorisation)}
            }
            else if(selecteur==roi2){
                if(arraysEqual(direction, [2,7])){
                    rock(selecteur,tour3)
                }
                else if(arraysEqual(direction, [6,7])){
                    rock(selecteur,tour4)
                }
                else{deplacementKing(selecteur,direction,autorisation)}
            }
            else{
                deplacement(selecteur,direction,autorisation)
            }
            selecteur=""
        }
    }
}


whiteThreats(empty,0)
echecN(empty,0)


whitePromotion.onclick = function (event){
    let positionRN = getPosition(roi2.getAttribute("style"))
    var promotedPawn = document.createElement('img')
    promotedPawn.src = event.target.getAttribute('src')
    promotedPawn.className = 'pionBlanc'
    promotedPawn.style.setProperty("--y", '87.5%')
    promotedPawn.style.setProperty("--x", getComputedStyle(event.target.parentNode).getPropertyValue("--x"))
    whitePromotion.style.display = 'none'
    var selectedPiece= getComputedStyle(event.target).getPropertyValue('--y')
    if(selectedPiece== '75%'){reine.appendChild(promotedPawn)}
    if(selectedPiece== '50%'){cav.appendChild(promotedPawn)}
    if(selectedPiece== '25%'){fou.appendChild(promotedPawn)}
    if(selectedPiece== '0%'){tour.appendChild(promotedPawn)}
    whiteThreats(empty,0)
    if(!dangerB[positionRN[0]][positionRN[1]]){
        echecMath('black', dangerB, direction)
    }
}
blackPromotion.onclick = function (event){
    let positionRN = getPosition(roi1.getAttribute("style"))
    var promotedPawn = document.createElement('img')
    promotedPawn.src = event.target.getAttribute('src')
    promotedPawn.className = 'pionNoir'
    promotedPawn.style.setProperty("--y", '0%')
    promotedPawn.style.setProperty("--x", getComputedStyle(event.target.parentNode).getPropertyValue("--x"))
    blackPromotion.style.display = 'none'
    var selectedPiece= getComputedStyle(event.target).getPropertyValue('--y')
    if(selectedPiece== '75%'){tourN.appendChild(promotedPawn)}
    if(selectedPiece== '50%'){fouN.appendChild(promotedPawn)}
    if(selectedPiece== '25%'){cavN.appendChild(promotedPawn)}
    if(selectedPiece== '0%'){reineN.appendChild(promotedPawn)}
    echecN(empty,0)
    if(!dangerN[positionRN[0]][positionRN[1]]){
        echecMath('white', dangerN, direction)
    }
}


function getPosition(x){
    x = x.replaceAll("-", "")
    x = x.replace("x", '"x"')
    x = x.replaceAll("y", '"y"')
    x = x.replaceAll("%", "")
    x = x.replace(";", ",")
    x = x.replace(";", "")
    x = JSON.parse('{'+x+'}')
    return [x.x/12.5, x.y/12.5]
}

function arraysEqual(a, b){
    if(a[0]==b[0] && a[1]==b[1]){
        return true
    }
    return false
}


function deplacement(selecteur, direction, autorisation){
    let positionRB = getPosition(roi1.getAttribute("style"))
    let positionRN = getPosition(roi2.getAttribute("style"))
    console.log(positionRB)
    console.log(positionRN)
    let positionD = getPosition(selecteur.getAttribute("style"))
    if(legit(selecteur, direction, autorisation) && trajectoire(selecteur, direction)){
        empty[positionD[0]][positionD[1]]=true
        empty[direction[0]][direction[1]]= autorisation.slice(-1)=='B'? 'white':'black';
        if((turn && dangerN[positionRB[0]][positionRB[1]] )||(!turn && dangerB[positionRN[0]][positionRN[1]])){

            selecteur.style.setProperty("--x", direction[0]*12.5+'%')
            selecteur.style.setProperty("--y", direction[1]*12.5+'%')
            if (selecteur==tour1){
                imo[0]=false
            }
            else if(selecteur==tour2){
                imo[1]=false
            }
            else if(selecteur==tour3){
                imo[2]=false
            }
            else if(selecteur==tour4){
                imo[3]=false
            }

            if(autorisation=="pionsB" && direction[1]==7){
            promotionB(selecteur, direction)
            }
            if(autorisation=="pionsN" && direction[1]==0){
            promotionN(selecteur, direction)
            }
            turn=!turn
            if(turn){
                white.style.display = 'flex';
                black.style.display = 'none'
            }else{
                white.style.display = 'none';
                black.style.display = 'flex';
            }
            whiteThreats(empty,0)
            echecN(empty,0)    
            if(!dangerB[positionRN[0]][positionRN[1]]){
                echecMath('black', dangerB, direction)
            }
            console.log(dangerN[positionRB[0]][positionRB[1]])
            if(!dangerN[positionRB[0]][positionRB[1]]){
                console.log("test25")
                echecMath('white', dangerN, direction)
            }

        }
        else{
            empty[positionD[0]][positionD[1]]= autorisation.slice(-1)=='B'? 'white':'black';
            empty[direction[0]][direction[1]]=true
        }
    }
}
function deplacementlegit(selecteur, direction, autorisation){
    let positionR=getPosition(autorisation.slice(-1)=='B'? roi1.getAttribute("style") : roi2.getAttribute("style"))

    if(legit(selecteur, direction, autorisation)){
        selecteur.style.setProperty("--x", direction[0]*12.5+'%')
        selecteur.style.setProperty("--y", direction[1]*12.5+'%')
        turn=!turn

        if(turn){
            white.style.display = 'flex';
            black.style.display = 'none'
        }else{
            white.style.display = 'none';
            black.style.display = 'flex'
        }
        if(autorisation=="pionsB" && direction[1]==7){
            promotionB(selecteur, direction)
        }
        if(autorisation=="pionsN" && direction[1]==0){
            promotionN(selecteur, direction)
        }
        if(!dangerB[positionR[0]][positionR[1]] && autorisation.slice(-1)=='B'){
            echecMath('black', dangerB, direction)
        }
        if(!dangerN[positionR[0]][positionR[1]] && autorisation.slice(-1)=='N'){
            echecMath('white', dangerN, direction)
        }


    }
    whiteThreats(empty,0)
    echecN(empty,0)
}
function deplacementKing(selecteur, direction, autorisation){
    let positionD = getPosition(selecteur.getAttribute("style"))
    if(legit(selecteur, direction, autorisation) && trajectoire(selecteur, direction)){
        if((selecteur==roi1 && dangerN[direction[0]][direction[1]])||(selecteur==roi2 && dangerB[direction[0]][direction[1]])){
            empty[positionD[0]][positionD[1]]=true
            empty[direction[0]][direction[1]]= autorisation.slice(-1)=='B'? 'white':'black';
            selecteur.style.setProperty("--x", direction[0]*12.5+'%')
            selecteur.style.setProperty("--y", direction[1]*12.5+'%')
            if(selecteur==roi1){
                imo[4]=false
            }
            else if(selecteur==roi2){
                imo[5]=false
            }
            turn=!turn
            if(turn){
                white.style.display = 'flex';
                black.style.display = 'none'
            }else{
                white.style.display = 'none';
                black.style.display = 'flex'
            }

            whiteThreats(empty,0)
            echecN(empty,0)
            if(!dangerB[positionD[0]][positionD[1]]){
                echecMath('black', dangerB, direction)
            }
            if(!dangerN[positionD[0]][positionD[1]]){
                echecMath('white', dangerN, direction)
            }

        }
        
    }

}
function rock(r,t){
    if(r==roi1 && imo[4] && dangerN[4][0]){
        let positionRN = getPosition(roi2.getAttribute("style"))
    
        if(t==tour1 && imo[0] && empty[1][0]==true && empty[2][0]==true && empty[3][0]==true && dangerN[0][0] && dangerN[1][0] && dangerN[2][0] && dangerN[3][0]){
            roi1.style.setProperty("--x", 2*12.5+'%')
            roi1.style.setProperty("--y", 0*12.5+'%')
            tour1.style.setProperty("--x", 3*12.5+'%')
            tour1.style.setProperty("--y", 0*12.5+'%')
            empty[2][0]= autorisation.slice(-1)=='B'? 'white':'black';
            empty[3][0]= autorisation.slice(-1)=='B'? 'white':'black';
            empty[0][0]=true
            empty[4][0]=true
        }
        else if(imo[1] && empty[5][0]==true && empty[6][0]==true && dangerN[7][0] && dangerN[6][0] && dangerN[5][0]){
            roi1.style.setProperty("--x", 6*12.5+'%')
            roi1.style.setProperty("--y", 0*12.5+'%')
            tour2.style.setProperty("--x", 5*12.5+'%')
            tour2.style.setProperty("--y", 0*12.5+'%')
            empty[5][0]= autorisation.slice(-1)=='B'? 'white':'black';
            empty[6][0]= autorisation.slice(-1)=='B'? 'white':'black';
            empty[7][0]=true
            empty[4][0]=true
        }
        turn=!turn
        white.style.display = 'none';
        black.style.display = 'flex'
        selecteur=""
        imo[4]=false
        if(!dangerB[positionRN[0]][positionRN[1]]){
            echecMath('black', dangerB, direction)
        }


    }
    else if(imo[5] && dangerB[4][7]){
        let positionRB = getPosition(roi1.getAttribute("style"))
        if(t==tour4 && imo[3] && empty[5][7]==true && empty[6][7]==true && dangerB[5][7] && dangerB[6][7] && dangerB[7][7]){
            roi2.style.setProperty("--x", 6*12.5+'%')
            roi2.style.setProperty("--y", 7*12.5+'%')
            tour4.style.setProperty("--x", 5*12.5+'%')
            tour4.style.setProperty("--y", 7*12.5+'%')
            empty[5][7]= autorisation.slice(-1)=='B'? 'white':'black';
            empty[6][7]= autorisation.slice(-1)=='B'? 'white':'black';
            empty[4][7]=true
            empty[7][7]=true
        }
        else if(imo[2] && empty[1][7]==true && empty[2][7]==true && empty[3][7]==true && dangerB[0][7] && dangerB[1][7] && dangerB[2][7] && dangerB[3][7]){
            roi2.style.setProperty("--x", 2*12.5+'%')
            roi2.style.setProperty("--y", 7*12.5+'%')
            tour3.style.setProperty("--x", 3*12.5+'%')
            tour3.style.setProperty("--y", 7*12.5+'%')
            empty[2][7]= autorisation.slice(-1)=='B'? 'white':'black';
            empty[3][7]= autorisation.slice(-1)=='B'? 'white':'black';
            empty[0][7]=true
            empty[4][7]=true
        }
        turn=!turn
        white.style.display = 'flex';
        black.style.display = 'none'
        selecteur=""
        imo[5]=false
        if(!dangerN[positionRB[0]][positionRB[1]]){
            echecMath('white', dangerN, direction)
        }

    }
    whiteThreats(empty,0)
    echecN(empty,0)
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
function manger(direction, event){
    if(selecteur!=""){
        let positionD = getPosition(selecteur.getAttribute("style"))

        if(legit(selecteur, direction, autorisation) && (autorisation=="pionsB" || autorisation=="pionsN")){whitePromotion
            deplacementlegit(selecteur,direction,autorisation)
            event.target.className="mort"
            empty[positionD[0]][positionD[1]]=true
            empty[direction[0]][direction[1]]= (autorisation.slice(-1)=='B'? 'white':'black');
            return
        }
        empty[direction[0]][direction[1]]=true
        if(legit(selecteur, direction, autorisation) && (autorisation=='roi' || autorisation == 'roiN') && (selecteur==roi1 && dangerN[direction[0]][direction[1]])||(selecteur==roi2 && dangerB[direction[0]][direction[1]])){
            deplacementKing(selecteur, direction, autorisation)
            event.target.className="mort"
            empty[positionD[0]][positionD[1]]=true
            empty[direction[0]][direction[1]]= autorisation.slice(-1)=='B'? 'white':'black';
            return

        }
        if(legit(selecteur, direction, autorisation) && trajectoire(selecteur,direction) && autorisation!="pionsB" && autorisation!="pionsN" && autorisation!="roiB" && autorisation!="roiN"){
            event.target.className="mort"
            deplacement(selecteur,direction,autorisation)

            empty[positionD[0]][positionD[1]]=true
            empty[direction[0]][direction[1]]= autorisation.slice(-1)=='B'? 'white':'black';
            return

        }
        empty[direction[0]][direction[1]] = event.target.parentNode.getAttribute("class").slice(-1)=='B'? 'white':'black'

    }
}


function legit(selecteur, direction, autorisation){
    let positionD = getPosition(selecteur.getAttribute("style"))
    if(autorisation=='pionsB'){
        if(direction[1]==positionD[1]+1 && direction[0]==positionD[0] && empty[direction[0]][direction[1]]==true){
            return true
        }
        else if(Math.abs(direction[0]-positionD[0])==1 && Math.abs(direction[1]-positionD[1])==1 && empty[direction[0]][direction[1]]!=true && direction[1]>positionD[1]){
            return true
        } 
        else if(positionD[1]==1 && direction[1]==3 && direction[0]==positionD[0] && empty[direction[0]][direction[1]]==true){
            return true
        }
    }
    else if(autorisation=="pionsN"){
        if(direction[1]==positionD[1]-1 && direction[0]==positionD[0] && empty[direction[0]][direction[1]]==true){
            return true
        }
        else if(Math.abs(direction[0]-positionD[0])==1 && Math.abs(direction[1]-positionD[1])==1 && empty[direction[0]][direction[1]]!=true && direction[1]<positionD[1]){
            return true
        } 
        else if(positionD[1]==6 && direction[1]==4 && direction[0]==positionD[0] && empty[direction[0]][direction[1]]==true){
            return true
        }
    }
    else if(autorisation=="roiB" ||autorisation=="roiN"){
        if(Math.abs(direction[0]-positionD[0])<=1 && Math.abs(direction[1]-positionD[1])<=1){
            return true
        }
    }
    else if(autorisation=="reineB"||autorisation=="reineN"){
        if(Math.abs(direction[0]-positionD[0])== Math.abs(direction[1]-positionD[1])){
            return true
        }
        else if(direction[0]==positionD[0] ||direction[1]==positionD[1]){
            return true
        }

    }
    else if(autorisation=="tourB" ||autorisation=="tourN"){
        if(direction[0]==positionD[0] ||direction[1]==positionD[1]){
            return true
        }
    }
    else if(autorisation=="cavB" ||autorisation== "cavN"){
        if((Math.abs(direction[0]-positionD[0])==2 || Math.abs(direction[1]-positionD[1])==2)&&(Math.abs(direction[0]-positionD[0])==1 || Math.abs(direction[1]-positionD[1])==1)){
            return true
        }
    }
    else if(autorisation=="fouB" ||autorisation== "fouN"){
        if(Math.abs(direction[0]-positionD[0])== Math.abs(direction[1]-positionD[1])){
            return true
        }
    }
    return false
}
function trajectoire(selecteur,direction){
    let positionD=getPosition(selecteur.getAttribute("style"))
    let x = direction[0]-positionD[0]
    let y = direction[1]-positionD[1]
    if(x !=0 && y!=0){
        if(x==y && x>0){
            for(let i = 1; i < x+1; i++){
                if(empty[positionD[0]+i][positionD[1]+i]!=true){
                    return false
                }
            }
        }
        if(x==y && x<0){
            for(let i = -1; i > x-1; i--){
                if(empty[positionD[0]+i][positionD[1]+i]!=true){
                    return false
                }
            }
        }
        if(x==-y && x>0){
            for(let i = 1; i < x+1; i++){
                if(empty[positionD[0]+i][positionD[1]-i]!=true){
                    return false
                }
            }
        }
        if(x==-y && x<0){
            for(let i = -1; i > x-1; i--){
                if(empty[positionD[0]+i][positionD[1]-i]!=true){
                    return false
                }
            }
        }
    }
    else if(x==0) {
        if(y>0){
            for (let i = 1; i < y+1 ; i++){
                if(empty[positionD[0]][positionD[1]+i]!=true){
                    return false
                }
            }   
        }
        if(y<0){
            for (let i = -1; i > y-1 ; i--){
                if(empty[positionD[0]][positionD[1]+i]!=true){
                    return false
                }
            }
        }
    }
    else if(y==0) {
        if(x>0){
            for (let i = 1; i < x+1 ; i++){
                if(empty[positionD[0]+i][positionD[1]]!=true){
                    return false
                }
            }   
        }
        if(x<0){
            for (let i = -1; i > x-1 ; i--){
                if(empty[positionD[0]+i][positionD[1]]!=true){
                    return false
                }
            }
        }
    }
    return true
}


function promotionB(selecteur, direction){
    whitePromotion.style.setProperty("--x", direction[0]*12.5+'%')
    whitePromotion.style.display = 'block';
    selecteur.className= 'mort'
}
function promotionN(selecteur, direction){
    blackPromotion.style.setProperty("--x", direction[0]*12.5+'%')
    blackPromotion.style.display = 'block';
    selecteur.className= 'mort'

}

function echecPion(selecteur,a){
    // si a = 0 calcul les menace, sinon calcul les deplacement possible


    if(selecteur.getAttribute("class")!="mort" && a==0){
        let pawnPosition= getPosition(selecteur.getAttribute("style"))

        if(a==0){
            dangerB[Math.abs(pawnPosition[0]-1)][pawnPosition[1]+1]=false
            dangerB[modx(pawnPosition[0]+1,pawnPosition[0])][pawnPosition[1]+1]=false
    
        }else{
            dangerB[pawnPosition[0]][pawnPosition[1]+1]=false
            if(pawnPosition[1]==1){
                dangerB[pawnPosition[0]][pawnPosition[1]+2]=false
            }
    
        }
    }
}
function echecPionN(selecteur,a){
    if(selecteur.getAttribute("class")!="mort"  && a==0){
        let pawnPosition= getPosition(selecteur.getAttribute("style"))

        if(a==0){
            dangerN[Math.abs(pawnPosition[0]-1)][pawnPosition[1]-1]=false
            dangerN[modx(pawnPosition[0]+1,pawnPosition[0])][pawnPosition[1]-1]=false    
        }else{
            dangerN[pawnPosition[0]][pawnPosition[1]-1]=false
            if(pawnPosition[1]==6){
                dangerN[pawnPosition[0]][pawnPosition[1]-2]=false
            }
        }
    }
}
function echecCav(selecteur,danger){
    if(selecteur.getAttribute("class")!="mort" && selecteur.getAttribute("class")!="a00"){
        let initialcav1= getPosition(selecteur.getAttribute("style"))
        danger[modx(initialcav1[0]-1,initialcav1[0])][modx(initialcav1[1]+2,initialcav1[1])]=false
        danger[modx(initialcav1[0]-1,initialcav1[0])][modx(initialcav1[1]-2,initialcav1[1])]=false
        danger[modx(initialcav1[0]-2,initialcav1[0])][modx(initialcav1[1]+1,initialcav1[1])]=false
        danger[modx(initialcav1[0]-2,initialcav1[0])][modx(initialcav1[1]-1,initialcav1[1])]=false
        danger[modx(initialcav1[0]+1,initialcav1[0])][modx(initialcav1[1]+2,initialcav1[1])]=false
        danger[modx(initialcav1[0]+1,initialcav1[0])][modx(initialcav1[1]-2,initialcav1[1])]=false
        danger[modx(initialcav1[0]+2,initialcav1[0])][modx(initialcav1[1]-1,initialcav1[1])]=false
        danger[modx(initialcav1[0]+2,initialcav1[0])][modx(initialcav1[1]+1,initialcav1[1])]=false
    }
}
function echecTour(selecteur,danger,empty){
    if(selecteur.getAttribute("class")!="mort" && selecteur.getAttribute("class")!="a00"){
        let initialtour1= getPosition(selecteur.getAttribute("style"))
        for(let i = initialtour1[0]+1; i < 8; i++){
            if(empty[i][initialtour1[1]]!=true){
                danger[i][initialtour1[1]]=false
                i=8
            }
            else{
                danger[i][initialtour1[1]]=false
            }
        }
        for(let i = initialtour1[0]-1; i > -1; i--){
            if(empty[i][initialtour1[1]]!=true){
                danger[i][initialtour1[1]]=false
                i=-1
            }
            else{
                danger[i][initialtour1[1]]=false
            }
        }
        for(let i = initialtour1[1]+1; i < 8; i++){
            if(empty[initialtour1[0]][i]!=true){
                danger[initialtour1[0]][i]=false
                i=8
            }
            else{
                danger[initialtour1[0]][i]=false
            }
        }
        for(let i = initialtour1[1]-1; i > -1; i--){
            if(empty[initialtour1[0]][i]!=true){
                danger[initialtour1[0]][i]=false
                i=-1
            }
            else{
                danger[initialtour1[0]][i]=false
            }
        }
    }

}
function echecFou(selecteur,danger,empty){
    if(selecteur.getAttribute("class")!="mort" && selecteur.getAttribute("class")!="a00"){
        let initialfou1= getPosition(selecteur.getAttribute("style"))
        if(initialfou1[0]<7 && initialfou1[1]<7){
            for(let i = 1; i<8 ; i++){
                if(empty[initialfou1[0]+i][initialfou1[1]+i]!=true || initialfou1[0]+i==7 || initialfou1[1]+i==7){
                    danger[initialfou1[0]+i][initialfou1[1]+i]=false
                    i=8
                }
                else{
                    danger[initialfou1[0]+i][initialfou1[1]+i]=false
                }
            }
        }
        if(initialfou1[0]>0 && initialfou1[1]<7){
            for(let i = 1; i<8 ; i++){
                if(empty[initialfou1[0]-i][initialfou1[1]+i]!=true || initialfou1[0]-i==0 || initialfou1[1]+i==7){
                    danger[initialfou1[0]-i][initialfou1[1]+i]=false
                    i=8
                }
                else{
                    danger[initialfou1[0]-i][initialfou1[1]+i]=false
                }
            }
        }
        if(initialfou1[0]>0 && initialfou1[1]>0){
            for(let i = 1; i<8 ; i++){
                if(empty[initialfou1[0]-i][initialfou1[1]-i]!=true || initialfou1[0]-i==0 || initialfou1[1]-i==0){
                    danger[initialfou1[0]-i][initialfou1[1]-i]=false
                    i=8
                }
                else{
                    danger[initialfou1[0]-i][initialfou1[1]-i]=false
                }
            }
        }
        if(initialfou1[0]<7 && initialfou1[1]>0){
            for(let i = 1; i<8 ; i++){
                if(empty[initialfou1[0]+i][initialfou1[1]-i]!=true || initialfou1[0]+i==7 || initialfou1[1]-i==0){
                    danger[initialfou1[0]+i][initialfou1[1]-i]=false
                    i=8
                }
                else{
                    danger[initialfou1[0]+i][initialfou1[1]-i]=false
                }
            }
        }
    }

}
function echecReine(selecteur,danger,empty){
    if(selecteur.getAttribute("class")!="mort" && selecteur.getAttribute("class")!="a00"){

        let initialtour1= getPosition(selecteur.getAttribute("style"))
        let initialfou1= initialtour1
        for(let i = initialtour1[0]+1; i < 8; i++){
            if(empty[i][initialtour1[1]]!=true){
                danger[i][initialtour1[1]]=false
                i=8
            }
            else{
                danger[i][initialtour1[1]]=false
            }
        }
        for(let i = initialtour1[0]-1; i > -1; i--){
            if(empty[i][initialtour1[1]]!=true){
                danger[i][initialtour1[1]]=false
                i=-1
            }
            else{
                danger[i][initialtour1[1]]=false
            }
        }
        for(let i = initialtour1[1]+1; i < 8; i++){
            if(empty[initialtour1[0]][i]!=true){
                danger[initialtour1[0]][i]=false
                i=8
            }
            else{
                danger[initialtour1[0]][i]=false
            }
        }
        for(let i = initialtour1[1]-1; i > -1; i--){
            if(empty[initialtour1[0]][i]!=true){
                danger[initialtour1[0]][i]=false
                i=-1
            }
            else{
                danger[initialtour1[0]][i]=false
            }
        } 

        if(initialfou1[0]<7 && initialfou1[1]<7){
            for(let i = 1; i<8 ; i++){
                if(empty[initialfou1[0]+i][initialfou1[1]+i]!=true || initialfou1[0]+i==7 || initialfou1[1]+i==7){
                    danger[initialfou1[0]+i][initialfou1[1]+i]=false
                    i=8
                }
                else{
                    danger[initialfou1[0]+i][initialfou1[1]+i]=false
                }
            }
        }
        if(initialfou1[0]>0 && initialfou1[1]<7){
            for(let i = 1; i<8 ; i++){
                if(empty[initialfou1[0]-i][initialfou1[1]+i]!=true || initialfou1[0]-i==0 || initialfou1[1]+i==7){
                    danger[initialfou1[0]-i][initialfou1[1]+i]=false
                    i=8
                }
                else{
                    danger[initialfou1[0]-i][initialfou1[1]+i]=false
                }
            }
        }
        if(initialfou1[0]>0 && initialfou1[1]>0){
            for(let i = 1; i<8 ; i++){
                if(empty[initialfou1[0]-i][initialfou1[1]-i]!=true || initialfou1[0]-i==0 || initialfou1[1]-i==0){
                    danger[initialfou1[0]-i][initialfou1[1]-i]=false
                    i=8
                }
                else{
                    danger[initialfou1[0]-i][initialfou1[1]-i]=false
                }
            }
        }
        if(initialfou1[0]<7 && initialfou1[1]>0){
            for(let i = 1; i<8 ; i++){
                if(empty[initialfou1[0]+i][initialfou1[1]-i]!=true || initialfou1[0]+i==7 || initialfou1[1]-i==0){
                    danger[initialfou1[0]+i][initialfou1[1]-i]=false
                    i=8
                }
                else{
                    danger[initialfou1[0]+i][initialfou1[1]-i]=false
                }
            }
        }
    }

}
function echecRoi(selecteur,danger,a){
    if(selecteur.getAttribute("class")!="mort" && a==0){
        let initialroi1= getPosition(selecteur.getAttribute("style"))
        danger[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]=false
        danger[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]=false
        danger[modx(initialroi1[0]+1,initialroi1[0])][modx(initialroi1[1],initialroi1[1])]=false
        danger[modx(initialroi1[0],initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]=false
        danger[modx(initialroi1[0],initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]=false
        danger[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1]+1,initialroi1[1])]=false
        danger[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1]-1,initialroi1[1])]=false
        danger[modx(initialroi1[0]-1,initialroi1[0])][modx(initialroi1[1],initialroi1[1])]=false
    }
}



function whiteThreats(empty,a){
    dgr1 = [true,true,true,true,true,true,true,true]
    dgr2 = [true,true,true,true,true,true,true,true]
    dgr3 = [true,true,true,true,true,true,true,true]
    dgr4 = [true,true,true,true,true,true,true,true]
    dgr5 = [true,true,true,true,true,true,true,true]
    dgr6 = [true,true,true,true,true,true,true,true]
    dgr7 = [true,true,true,true,true,true,true,true]
    dgr8 = [true,true,true,true,true,true,true,true]
    dangerB = [dgr1,dgr2,dgr3,dgr4,dgr5,dgr6,dgr7,dgr8]

    let whitePawns = document.querySelector('.pionsB').children
    let whiteKnights = document.querySelector('.cavB').children
    let whiteBishops = document.querySelector('.fouB').children
    let whiteRooks = document.querySelector('.tourB').children
    let whiteQueens = document.querySelector('.reineB').children
    let whiteKing = document.querySelector('.roiB').children

    for (const element of whitePawns){
        echecPion(element, a)
    }
    for (const element of whiteKnights){
        echecCav(element, dangerB)
    }
    for (const element of whiteBishops){
        echecFou(element, dangerB, empty)
    }
    for (const element of whiteRooks){
        echecTour(element, dangerB, empty)
    }
    for (const element of whiteQueens){
        echecReine(element, dangerB, empty)
    }
    echecRoi(whiteKing[0],dangerB,a)

}

function echecN(empty,a){
    dgr1 = [true,true,true,true,true,true,true,true]
    dgr2 = [true,true,true,true,true,true,true,true]
    dgr3 = [true,true,true,true,true,true,true,true]
    dgr4 = [true,true,true,true,true,true,true,true]
    dgr5 = [true,true,true,true,true,true,true,true]
    dgr6 = [true,true,true,true,true,true,true,true]
    dgr7 = [true,true,true,true,true,true,true,true]
    dgr8 = [true,true,true,true,true,true,true,true]
    dangerN = [dgr1,dgr2,dgr3,dgr4,dgr5,dgr6,dgr7,dgr8]

    let blackPawns = document.querySelector('.pionsN').children
    let blackKnights = document.querySelector('.cavN').children
    let blackBishops = document.querySelector('.fouN').children
    let blackRooks = document.querySelector('.tourN').children
    let blackQueens = document.querySelector('.reineN').children
    let blackKing = document.querySelector('.roiN').children

    for (const element of blackPawns){
        echecPionN(element, a)
    }
    for (const element of blackKnights){
        echecCav(element, dangerN)
    }
    for (const element of blackBishops){
        echecFou(element, dangerN, empty)
    }
    for (const element of blackRooks){
        echecTour(element, dangerN, empty)
    }
    for (const element of blackQueens){
        echecReine(element, dangerN, empty)
    }
    echecRoi(blackKing[0],dangerN,a)
}


function echecBl(){
    whiteThreats(empty,1)

    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if(empty[i][j]==true && dangerB[i][j]){
                echecBlancs[i][j]=true

            }
            else{
                echecBlancs[i][j]=false
            }
        }
    }
    whiteThreats(empty,0)
    
}

function echecNr(){
    echecN(empty,1)
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if(empty[i][j]==true && dangerN[i][j]){
                echecNoirs[i][j]=true

            }
            else{
                echecNoirs[i][j]=false
            }
        }
    }
    
}

function echecMath(color, danger ,direction){
    let positionR=getPosition(color=='white'? roi1.getAttribute("style") : roi2.getAttribute("style"))
    let check=[false, false, false, false, false, false, false, false]
    
    if(positionR[1]==0){
        check[0]=true
        check[1]=true
        check[2]=true
    }
    if(positionR[1]==7){
        check[5]=true
        check[6]=true
        check[7]=true
    }
    if(positionR[0]==0){
        check[0]=true
        check[3]=true
        check[5]=true
    }
    if(positionR[0]==7){
        check[2]=true
        check[4]=true
        check[7]=true
    }

    check[0]? null:(!danger[positionR[0]-1][positionR[1]-1] || (empty[positionR[0]-1][positionR[1]-1]==color ))? check[0]=true:null;
    check[1]? null:(!danger[positionR[0]][positionR[1]-1] || (empty[positionR[0]][positionR[1]-1]==color ))? check[1]=true:null;
    check[2]? null:(!danger[positionR[0]+1][positionR[1]-1] || (empty[positionR[0]+1][positionR[1]-1]==color ))? check[2]=true:null;
    check[3]? null:(!danger[positionR[0]-1][positionR[1]] || (empty[positionR[0]-1][positionR[1]]==color ))? check[3]=true:null;
    check[4]? null:(!danger[positionR[0]+1][positionR[1]] || (empty[positionR[0]+1][positionR[1]]==color ))? check[4]=true:null;
    check[5]? null:(!danger[positionR[0]-1][positionR[1]+1] || (empty[positionR[0]-1][positionR[1]+1]==color ))? check[5]=true:null;
    check[6]? null:(!danger[positionR[0]][positionR[1]+1] || (empty[positionR[0]][positionR[1]+1]==color ))? check[6]=true:null;
    check[7]? null:(!danger[positionR[0]+1][positionR[1]+1] || (empty[positionR[0]+1][positionR[1]+1]==color ))? check[7]=true:null;

    if(!check.includes(false)){
        if(color=='white'){
            echecBl()
            echecN(echecBlancs,0)
            if(!dangerN[positionR[0]][positionR[1]] && dangerB[direction[0]][direction[1]]){
                console.log("echec et math victoire Noir")
                endGameReview.style.display = 'flex'
                whiteWin.style.display = 'none'
                endGame = true

            }else{
                whiteThreats(empty,0)

            }
        }else{
            echecNr()
            whiteThreats(echecNoirs,0)
            if(!dangerB[positionR[0]][positionR[1]] && dangerN[direction[0]][direction[1]]){
                console.log("echec et math victoire Blanc")
                endGameReview.style.display = 'flex'
                blackWin.style.display = 'none'
                endGame = true
            }else{
                echecN(empty,0)
            }    
        }
    }
}