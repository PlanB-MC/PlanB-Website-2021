import React, { useState } from 'react'
import Layout from '../components/layout'
import FloatingBar from '../components/floating-bar/floating-bar.component'
import { HeaderImage, JoinContainer } from '../page-style/join-planb.styles'



const JoinPlanB = (props) => {

    const params = props.location.search
        .slice(1)
        .split('&')
        .map(p => p.split('='))
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

    const validApplicant = params.pbref === "true"
    console.log(params, validApplicant)
    console.log(props)

    const [avatar, setAvatar] = useState("61699b2e-d327-4a01-9f1e-0ea8c3f06bc6")

    const onChange = (value) => {

        fetch(`http://api.allorigins.win/get?url=https://api.mojang.com/users/profiles/minecraft/${value}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (!data.contents) return;
                setAvatar(JSON.parse(data.contents).id)
            })

    }


    // We want to ensure the user has landed on the page after being refered by the Discord Bot
    // This is because the application process will rely on them being in the server. 
    const refferedApplicant = () => {
        return (
            <div>
                <img src={`https://crafatar.com/renders/body/${avatar}?size=120&overlay`} />
                <form name="contact" method="POST" data-netlify="true">


                    <input placeholder="PREFERED NAME" type="text" name="name" />
                    <input onChange={(a) => onChange(a.target.value)} placeholder="IGN" type="text" name="ign" />
                    <input type="text" disabled hidden value={`${params.discord}#${params.discrim}`} />

                    <input placeholder="AGE" type="text" name="age" />
                    <input placeholder="TIMEZONE" type="text" name="timezone" />
                    <input placeholder="HOW DID YOU HEAR ABOUT US" type="text" name="heardaboutusvia" />
                    <input placeholder="Gender" type="text" name="gender" />
                    <input placeholder="TELL US A LITTLE ABOUT YOURSELF" type="textarea" name="aboutapplicant" />

                    <input placeholder="WHEN DID YOU START PLAYING MC?" type="text" name="version" />
                    <input placeholder="WHAT ARE YOUR FAVORITE THINGS TO DO IN MINECRAFT?" type="text" name="favthings" />
                    <input placeholder="WHAT DO YOU WANT FROM A SERVER AND IT'S COMMUNITY?" type="text" name="expectations" />
                    <input placeholder="WHAT DREW YOU TO OUR COMMUNITY" type="text" name="planbappeal" />



                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>

        )
    }

    const wildApplicant = () => {
        return (

            <div>
                <h1>How To Join</h1>
                <p>Step 1 - Join PlanB Discord</p>
                <p>Step 2 - Lorem Ispum</p>
                <p>Step 3 - Lorem Ispum</p>
                <p>Step 5 - Lorem Ispum</p>
                <p>Step 5 - Lorem Ispum</p>
            </div>
        )

    }

    return (
        <Layout location={props.location}>
            <HeaderImage />

            <FloatingBar
                title={`Join PlanB`}
            />



            <JoinContainer>
                <p>{validApplicant ? refferedApplicant() : wildApplicant()}</p>
            </JoinContainer>




        </Layout>
    )
}

export default JoinPlanB

