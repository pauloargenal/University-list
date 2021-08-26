const fetchUniversities = async () => {
  const url = `https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchbyName = async (search) => {
  const url = `http://universities.hipolabs.com/search?name=${search}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchByCountry = async (country) => {
  const url = `http://universities.hipolabs.com/search?country=${country}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { fetchUniversities, fetchbyName, fetchByCountry };
