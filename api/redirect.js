export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  return Response.redirect('https://my.gov.au', 302);
}
