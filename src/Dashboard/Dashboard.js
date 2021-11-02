import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineRise } from "react-icons/ai";
import "./Dashboard.css";

const Dashboard = (props) => {

    const [loading, setloading] = useState(false)
    const [Image, setImage] = useState('')

    useEffect(async() => {
        setloading(true)
        const header = {"x-access-token" : localStorage.getItem('token')}
        await axios.post('http://localhost:8000/user/image', header)
        .then((res) => {
            setImage(res.data.data.image)} )
        .catch((err) => console.log(err))
        setloading(false)
    }, [])

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','mfxkqr6g')
        setloading(true)
        let body = data
        setloading(true)
        await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_image}/image/upload`,body)
        .then((res) => {console.log(res.data.secure_url)
             setImage(res.data.secure_url)})
        const header = {"x-access-token" : localStorage.getItem('token')}
        body = {"image": Image}
        axios.put('http://localhost:8000/user/image',body,header)
        .then((res) => console.log(res))
        
        setloading(false)
    }
    if(loading){
        return (
            <div>Loading ...</div>
        )
    }
    return (
        <>
            <div>
                <div className={`dashboard background-${props.mode}`}>
                    <div className={`main main-background-${props.mode} `}>
                        <nav className="item1">
                            <div
                                id="img"
                                href="https://github.com/cmade"
                                target="_blank"
                            >
                                {" "}
                                {Image && <img
                                    className="img1"
                                    src={Image}
                                    alt="profile image"
                                />}
                                <input type="file" onChange={uploadImage} ></input>
                            </div>
                            <div className="info">
                                <span className="heading headingUsername">
                                    VarunKT001
                                </span>
                                <ul class="personalInfo">
                                    <li className="li">Name : <span className="li1">Varun Kumar Tiwari</span></li>
                                    <li className="li">Rank : <span className="li1">2304</span></li>
                                    <li className="li">Github Profile : <span className="li1">VarunKT001</span></li>
                                    <li className="li">Followers : <span className="li1">4700</span></li>
                                </ul>
                            </div>
                        </nav>
                        <section className="other">
                            <div className="other-item">
                                <div className="item2 reviews item">
                                    <p class="heading">Rank</p>
                                    <p className="p1">2,304 {<AiOutlineRise class="heart" />}</p>
                                </div>
                                <div className="item2 rating item">
                                    <p class="heading">Followers</p>
                                    <p className="p1">4.7k {<AiOutlineRise class="heart" />}</p>
                                </div>
                                <div className="item2 sentiment item">
                                    <p class="heading">Total Likes</p>
                                    <p className="p1">
                                        966 {<AiOutlineLike class="heart" />}
                                    </p>
                                
                                </div>
                            </div>
                            <div className="item5 visitors">
                                <p class="heading savedcodes">
                                    Saved Codes:{" "}
                                    <span className="p2">148,825</span>
                                </p>
                                <div className="scodeflex">
                                <div className="item3 scode1 box">
                                    <p class="lang">C++</p>
                                    <p className="t1">
                                        Bubble Sort Algo
                                    </p>
                                    <p className="t1">
                                        bubblesort.cpp
                                    </p>
                                    <p className="t1">
                                        10/9/11
                                    </p>
                                </div>
                                <div className="item3 scode1 box">
                                    <p class="lang">C++</p>
                                    <p className="t1">
                                        Merge Sort Algo
                                    </p>
                                    <p className="t1">
                                        mergesort.cpp
                                    </p>
                                    <p className="t1">
                                        10/9/11
                                    </p>
                                </div>
                                <div className="item3 scode1 box">
                                    <p class="lang">C++</p>
                                    <p className="t1">
                                        Quick Sort Algo
                                    </p>
                                    <p className="t1">
                                        quicksort.cpp
                                    </p>
                                    <p className="t1">
                                        10/9/11
                                    </p>
                                </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

