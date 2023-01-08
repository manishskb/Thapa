import React from 'react';
import Sdata from './Sdata';
import Card from './Card'


const Amazon = () => {
    return(
        <Card
                    key={Sdata[1].id}
                    imgsrc={Sdata[1].imgsrc}
                    link={Sdata[1].link}
                    sname={Sdata[1].sname}
                    title={Sdata[1].title}
                />
    )
}

export default Amazon;