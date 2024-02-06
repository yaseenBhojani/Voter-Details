export const getVoterData = async (nic) => {
    const response = await fetch(`https://wepk-portal-api.azurewebsites.net/api/IndividualVoterParchisListing/GetPaginatedItems?Cnic=${nic}&WithFamilyMembers=True&CurrentIndex=1&RowsPerPage=10&UsePagination=False&EventId=61&NaId=0&PaId=0&UcId=0`, {
        "headers": {
          "accept": "/",
          "accept-language": "en-US,en;q=0.6",
          "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3YTEyOTkzMS1kY2Y0LTQ5YjgtYTZlNS1iMTM1YjhlODYyMGYiLCJ1bmlxdWVfbmFtZSI6Ik5BLTI0Nldlc3RHRS0yMDI0IiwibmFtZSI6Ik5BLTI0Nldlc3RHRS0yMDI0IiwianRpIjoiNDg3ODhiYjYtZWExYi00ZTYzLWE5OTUtMjE4Y2YxNmU4MWNhIiwiZXhwIjoxNzEyMzk2MDUyLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjdhMTI5OTMxLWRjZjQtNDliOC1hNmU1LWIxMzViOGU4NjIwZiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJOQS0yNDZXZXN0R0UtMjAyNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJDTVNNQU5BR0VSIiwiQUNDRVNTVE9LRU4iXSwibmJmIjoxNzA3MjEyMDUyLCJpc3MiOiJ3aW5lbGVjdGlvbi5haSIsImF1ZCI6ImludGVybmFsIn0.ncA5XvWcyNtGSVRcQLqUuV3Bwon_hJ-AuGcYsmU2HAg",
          "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Brave\";v=\"121\", \"Chromium\";v=\"121\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-gpc": "1"
        },
        "referrer": "https://wepk-portal.azurewebsites.net/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
      });
      return await response.json();
};