import axios from "axios";
import { useForm } from "react-hook-form";
import { FaRegPaperPlane } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";


function CommentForm() {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const params = useParams();

    const onSubmit = (data) => {
        console.log(data);
        console.log(params)
        axios
            .post(process.env.REACT_APP_API + '/api/comments/', {...data, postId: params.id})
            .then(
                (result) => {
                    navigate("/post/" + params.id)
                console.log(result);
             })
            .catch((err) => console.log(err));
    };


    return (
        <div className='container'>
            <div className='card'>
                <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
                <div>
                    <textarea {...register("commentDescription")} placeholder="Écrivez un commentaire..." rows='auto'
                    className="form-control bg-light pb-0 rounded-pill" id="InputComment1" />
                </div>
                <div className='d-flex justify-content-end'>
                    <button type="submit" value="Submit" className="btn d-flex" id='btn-comment-publish'>
                        <FaRegPaperPlane />
                        <p className='ps-4'>Publier</p>
                    </button>
                </div>
                </form>
            </div>
        </div>
        );
    }

export default CommentForm;