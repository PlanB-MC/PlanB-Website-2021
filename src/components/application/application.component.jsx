import React, { useState } from 'react'
import axios from 'axios'

import Swal from 'sweetalert2'

import {
  ApplicantAvatar,
  ApplicationContentContainer,
  ApplicationForm,
  ApplicationSubmitBtn,
  ApplicationTitle,
  DisabledInput,
  TextAreasContainers,
} from './application.styles'

const Application = ({ params }) => {
  const [pref_name, set_pref_name] = useState('')
  const [ign, set_ign] = useState('')
  const [age, set_age] = useState('')
  const [timezone, set_timezone] = useState('')
  const [referred, set_reffered] = useState('')
  const [gender, set_gender] = useState('')
  const [about_applicant, set_about_applicant] = useState('')
  const [first_played, set_first_played] = useState('')
  const [mc_favs, set_mc_favs] = useState('')
  const [server_wants, set_server_wants] = useState('')
  const [why_pbmc, set_why_pbmc] = useState('')

  const submitApplication = () => {
    if (
      !pref_name ||
      !ign ||
      !age ||
      !timezone ||
      !referred ||
      !gender ||
      !about_applicant ||
      !first_played ||
      !mc_favs ||
      !server_wants ||
      !why_pbmc
    )
      return Swal.fire({
        title: 'Error!',
        text: 'You need to complete every field!',
        icon: 'error',
        confirmButtonText: 'Cool',
        confirmButtonColor: '#ff1053',
      })

    axios({
      method: 'post',
      url: 'http://localhost:3100/apply/application',
      data: {
        pref_name: pref_name,
        ign: ign,
        age: age,
        timezone: timezone,
        referred: referred,
        gender: gender,
        about_applicant: about_applicant,
        first_played: first_played,
        mc_favs: mc_favs,
        server_wants: server_wants,
        why_pbmc: why_pbmc,
        discord_uuid: params.duuid,
        discord_name: params.uname,
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          Swal.fire({
            title: 'APPLICATION RECEIVED!',
            text: 'Please be advised that application processing can take upto 24 hours, we appreciate your patience. ',
            icon: 'success',
            confirmButtonText: 'Cool',
            confirmButtonColor: '#ff1053',
          })
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'There was an error sending your application, please try again. Alternatively please drop us a message on Discord.',
            icon: 'error',
            confirmButtonText: 'Cool',
            confirmButtonColor: '#ff1053',
          })
        }
      })
      .catch(function (error) {
        // console.log(error);
      })
  }

  const avatar = ign ? ign : 'steeeev12885'

  return (
    <ApplicationContentContainer>
      <ApplicationTitle>
        {params.uname}#{params.discrim}
      </ApplicationTitle>

      <ApplicantAvatar
        src={`https://minotar.net/helm/` + avatar}
        alt={`${ign} Minecraft Avatar`}
      />
      <ApplicationForm>
        <DisabledInput
          value={`${params.uname}#${params.discrim}`}
          type="text"
          readOnly
        />
        <input
          onChange={(a) => set_pref_name(a.target.value)}
          placeholder="PREFERED NAME"
          type="text"
          name="name"
          required
        />
        <input
          onChange={(a) => set_ign(a.target.value)}
          placeholder="IGN"
          type="text"
          name="ign"
        />

        <input
          onChange={(a) => set_age(a.target.value)}
          placeholder="AGE"
          type="text"
          name="age"
        />
        <input
          onChange={(a) => set_timezone(a.target.value)}
          placeholder="TIMEZONE"
          type="text"
          name="timezone"
        />
        <input
          onChange={(a) => set_reffered(a.target.value)}
          placeholder="HOW DID YOU HEAR ABOUT US"
          type="text"
          name="heardaboutusvia"
        />
        <input
          onChange={(a) => set_gender(a.target.value)}
          placeholder="Gender"
          type="text"
          name="gender"
        />
        <input
          onChange={(a) => set_about_applicant(a.target.value)}
          placeholder="TELL US A LITTLE ABOUT YOURSELF"
          type="textarea"
          name="aboutapplicant"
        />

        <input
          onChange={(a) => set_first_played(a.target.value)}
          placeholder="WHEN DID YOU START PLAYING MC?"
          type="text"
          name="version"
        />
      </ApplicationForm>
      <TextAreasContainers>
        <textarea
          onChange={(a) => set_mc_favs(a.target.value)}
          placeholder="WHAT ARE YOUR FAVORITE THINGS TO DO IN MINECRAFT?"
          type="text"
          rows="10"
          cols="30"
        />
        <textarea
          onChange={(a) => set_server_wants(a.target.value)}
          placeholder="WHAT DO YOU WANT FROM A SERVER AND IT'S COMMUNITY?"
          type="text"
          rows="10"
          cols="30"
        />
        <textarea
          onChange={(a) => set_why_pbmc(a.target.value)}
          placeholder="WHAT DREW YOU TO OUR COMMUNITY"
          type="text"
          rows="10"
          cols="300"
        />
      </TextAreasContainers>

      <ApplicationSubmitBtn onClick={() => submitApplication()}>
        SEND IT
      </ApplicationSubmitBtn>
    </ApplicationContentContainer>
  )
}

export default Application
