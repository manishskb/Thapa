import React from 'react';
import Sdata from './Sdata';
import Card from './Card';


const Netflix = () => {
    return(
        Sdata.map((val) =>{
            return(
                <Card
                    key={val.id}
                    imgsrc={val.imgsrc}
                    link={val.link}
                    sname={val.sname}
                    title={val.title}
                />
            )
        })
    )    
}

export default Netflix;