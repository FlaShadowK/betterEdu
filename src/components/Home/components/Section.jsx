const Section = (props) => {
  return(
      <section className={props.className} style={{paddingTop: 96, paddingBottom: 96, background: props.background}}>
          {props.children}
      </section>
  )
}

export default Section;