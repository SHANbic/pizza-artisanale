import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [subscriptionStatus, setsubscriptionStatus] = useState("")

  const _handleSubmit = async e => {
    e.preventDefault()
    const { result } = await addToMailchimp(email)
    setsubscriptionStatus(result)
  }
  return (
    <form onSubmit={_handleSubmit}>
      {subscriptionStatus === "success" ? (
        <p>Merci de votre inscription ! A bientôt</p>
      ) : (
        <>
          <p>Ne manquez rien de notre actualité</p>
          {subscriptionStatus === "error" && (
            <p className="error">
              Une erreur est survenue. Votre mail est peut-être déjà renseigné ou son format n'est pas valide
            </p>
          )}
          <div className="subscription-bar">
            <input type="email" onChange={e => setEmail(e.target.value)} />
            <input
              type="submit"
              onClick={_handleSubmit}
              value="Je m'inscris !"
            />
          </div>
        </>
      )}
    </form>
  )
}

export default ContactForm
