import { useState, useCallback } from 'react';
import { useToast } from '../context/ToastContext';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { showToast } = useToast();

  const handleRequest = useCallback(async (apiCall, successMessage = null) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiCall();
      if (successMessage) {
        showToast(successMessage, 'success');
      }
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      setError(errorMessage);
      showToast(errorMessage, 'error');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  return {
    loading,
    error,
    handleRequest
  };
}; 