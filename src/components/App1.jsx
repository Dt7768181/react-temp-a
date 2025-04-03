import '../assets/App1.css'
import styles from './App1.module.css'
export default function App1(){
    const mystyle={
        backgroundColor: "orange",
        color: "white"
    }
    return(
        <div>
            <h1>THIS IS APP1</h1>
            <p style={{backgroundColor:"blue",color:'white'}}>Hello world</p>
            <p style={mystyle}>Hello world</p>
            <p className='Apptxt'>Hello World</p>
            <p className={styles.txt}>Hello World</p>
        </div>
    )
}