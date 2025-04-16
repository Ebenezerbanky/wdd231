export async function fetchTeamData() {
    try {
      const res = await fetch('../data/team.json');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching data", error);
      return [];
    }
  }
  