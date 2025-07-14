function buildJob(job) {
  let duties = '';
  job.duties.forEach((d) => {
    duties += `<li>${d}</li>`;
  });

  return `
  ${job.job_title}
  <ul>${duties}</ul>
  `;
}

const template = `
  <h1>${resumeData.header.name}</h1>
  <div>
    ${buildJob(resumeData.professional_experience[0].jobs[0])}
  </div>
`;

document.getElementById("resume").innerHTML = template;
