import React from 'react';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCart = ({news}) => {
    const { title, _id, details, image_url, total_view, author, rating } = news;
    return (
      <Card className="mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className='d-flex align-items-center'>
            <Image
              className='me-3'
              src={author.img}
              style={{ height: "56px" }}
              roundedCircle
            ></Image>
            <div>
              <p className='my-0'>{author?.name}</p>
              <p className='my-0'>{author?.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark role='button' className='me-2'></FaRegBookmark>
            <FaShareAlt role='button'></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className='mb-3'>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text className='mt-3'>
            {details.length > 250 ? (
              <>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${_id}`}>Read More</Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div>
            <FaStar className='text-warning me-2'></FaStar>
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye className='me-2'></FaEye>
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsSummaryCart;