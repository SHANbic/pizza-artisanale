import React from "react"

class GoogleMap extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "50vh",
          maxHeight: "600px",
          height: "75vh",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.038693951099!2d2.634908715663806!3d48.55871267925927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4f26a042f02c4c38!2sPizza%20Artisanale!5e1!3m2!1sfr!2sfr!4v1603262897757!5m2!1sfr!2sfr"
          title="googlemap"
          style={{
            border: "0",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    )
  }
}

export default GoogleMap
