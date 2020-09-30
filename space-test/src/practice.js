import { useState } from 'react';

export const LikeButton = () = {
    
    const [isLiked, setStatus] = useState(false);
    const [likeCount, increaseCount] = useState('100');
    
    function handleClick() {
        setStatus(!isRecording);
    }
    
    function increaseCount() {
        likeCount + 1
    }
    
    return (
        <>
            <div className="liked-button">
                <h2>Like Button</h2>
            </div>
            <style>{`
                .like-button {
                    font-size: 1rem;
                    padding: 5px 10px;
                    color:  #585858;
                }
               .liked {
                    font-weight: bold;
                    color: #1565c0;
               }
            `}</style>
        </>
    );
}
