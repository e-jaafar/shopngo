import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Reviews = ({ productId, rating, reviews = [] }) => {
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log('Nouveau commentaire:', newReview);
    setShowReviewForm(false);
    setNewReview({ rating: 5, comment: '' });
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Avis clients</h2>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Écrire un avis
        </button>
      </div>

      {showReviewForm && (
        <form onSubmit={handleSubmitReview} className="mt-4 space-y-4 bg-gray-50 p-4 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700">Note</label>
            <div className="flex items-center mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  className={`${
                    newReview.rating >= star ? 'text-yellow-400' : 'text-gray-300'
                  } hover:text-yellow-400`}
                >
                  <StarIcon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Commentaire</label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Publier
          </button>
        </form>
      )}

      <div className="mt-6 space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-t border-gray-200 pt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={`h-5 w-5 ${
                      review.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-500">{review.date}</p>
            </div>
            <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews; 