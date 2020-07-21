import React from 'react'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'

const Post = (props) => {

  return (

    <React.Fragment>


      <Card>

        <div className="row">

          <div className="offset-2 col-md-6">
            <Card.Title>
              <Link to={`/${props.id}/${props.Title}`} style={{ color: 'deepblue', fontSize: "20px" }}>{props.Title.toUpperCase()}</Link>

            </Card.Title>


            <Card.Body>


              <p>{props.Brief}</p>

              <Link to={`/${props.id}/${props.Title}`} className="btn btn-primary">Read more</Link>
            </Card.Body>
          </div>
        </div>

      </Card>
    </React.Fragment>

  )



}
export default Post;
