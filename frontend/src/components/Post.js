import React from 'react'
import { Link } from 'react-router-dom'

const Post = (props) => {

  return (

    <React.Fragment>


      <div class="card">

        <div className="row">

          <div className="offset-2 col-md-6">
            <div className="card-title">
              <Link to={`/${props.id}/${props.Title}`} style={{ color: 'deepblue', fontSize: "20px" }}>{props.Title.toUpperCase()}</Link>

            </div>


            <div className="card-body">


              <p>{props.Brief}</p>

              <Link to={`/${props.id}/${props.Title}`} className="btn btn-primary">Read more</Link>

            </div>

          </div>

        </div>


      </div>
    </React.Fragment>

  )



}
export default Post;