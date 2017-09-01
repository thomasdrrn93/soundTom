const createPeak = (peak) => {
  return $.ajax({
      method: 'POST',
      url: 'api/peaks',
      data: peak
  });
};

export default createPeak;
