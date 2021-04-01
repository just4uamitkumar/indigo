
const PageHeader = (props:any) => {
    return(
        <section className="pageHeader">
        <div className="container">
          <h1>{props.pageTitle}</h1>
          <div className="pageSlogan">
            <p>{props.tagline}</p>
          </div>           
        </div>
        </section>
    )
}

export default PageHeader
