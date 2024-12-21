"use client"
import React, { ReactNode } from 'react'
import Image  from 'next/image'
import Footer from './Footer'
import useWindowSize from './WindowSize'
import '../../styles/AboutScreen.css';
interface propsType{
ScreenContent:{
heading:string;
colorTheme:string;
img: ReactNode;
decs:string;
}
}

export default function ServicesLayout({ScreenContent}:propsType) {
    const midPoint = useWindowSize().width/2;
    const start = midPoint-540;
    const end = midPoint+500;
    return (
            <div style={styles.container}  >
                <p style={{...styles.heading,color:ScreenContent.colorTheme, justifySelf:'center' }}>{ScreenContent.heading}</p>
                <div style={{...styles.imgContainer, borderColor:ScreenContent.colorTheme}} >   
                    {ScreenContent.img}
                </div>
                <div >
                    <Image src={'/card-bg.png'} style={{...styles.imgTop,marginLeft:start}} alt='card-bg1' width={50} height={50}  />
                    <p style={styles.decs} >
                        {ScreenContent.decs}
                    </p>
                    <Image src={'/card-bg2.png'}  style={{...styles.imgBottom,marginLeft:end, marginBottom:30}} alt='car-bg2' width={50} height={50}  />
                </div>
                <Footer />
            </div>
    )
}

const styles ={
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white',
       
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 15,
    },
    imgContainer: {
        width: 390,
        height: 238,
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 3,
        marginTop: 15,
        justifySelf:'center',
        justifyContents:'center'
    },
    decs: {
        alignSelf: 'center',
        marginTop: 2,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 18,
        backgroundColor:'#f5f5f5',
        justifySelf:'center',
        width:1000,
        padding:50
    },
    imgTop:{
        height:50,
        width:50,
        marginTop:20,
    },
    imgBottom:{
        height:50,
        width:50,
        alignSelf:'flex-end',
    },
}