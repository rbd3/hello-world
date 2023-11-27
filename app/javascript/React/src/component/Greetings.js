import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../../../redux/greetingSlice';

export default function Greeting() {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings.value);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return <div className="text-title">{greetings}</div>;
}