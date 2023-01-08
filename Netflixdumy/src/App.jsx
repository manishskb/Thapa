import React from 'react';
import Amazon from './Amazon';
import Netflix from './Netflix';
// import Card from './Card';
// import sdata from './Sdata';


// function ncard(val){
//     return(
//         <Card
//         imgsrc={val.imgsrc}
//         link={val.link}
//         sname={val.sname}
//         title={val.title}
//         />
//     )
// }

let supS = 'Netflix';

const App = ()=>{
    return(

    <>
        <h1 className='heading_style'> List of Top 5 NETFLIX Series All Over World!</h1>
        
        {(supS === 'Netflix')?<Netflix/>:<Amazon/>}
        
        
        {/* <Card
        imgsrc={sdata[0].imgsrc}
        link={sdata[0].link}
        sname={sdata[0].sname}
        title={sdata[0].title}
        />
       <Card
        imgsrc={sdata[1].imgsrc}
        link={sdata[1].link}
        sname={sdata[1].sname}
        title={sdata[1].title}
        />
        <Card
        imgsrc={sdata[2].imgsrc}
        link={sdata[2].link}
        sname={sdata[2].sname}
        title={sdata[2].title}
        />
        <Card
        imgsrc={sdata[3].imgsrc}
        link={sdata[3].link}
        sname={sdata[3].sname}
        title={sdata[3].title}
        />
        <Card
        imgsrc={sdata[4].imgsrc}
        link={sdata[4].link}
        sname={sdata[4].sname}
        title={sdata[4].title}
        /> */}
    </>
    );
}

export default App;