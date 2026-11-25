function sortCodes(arr: string[]): string[] {
  
  return [...arr].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

const tests: [string[], string[]][] = [

  [["TH19", "SG20", "TH2"], ["SG20", "TH2", "TH19"]],
  [["TH10", "TH3Netflix", "TH1", "TH7"], ["TH1", "TH3Netflix", "TH7", "TH10"]],

];

for (const [input, expected] of tests) {
  const result = sortCodes(input);
  const ok = JSON.stringify(result) === JSON.stringify(expected);
  if (ok) 
  console.log(`${ok ? "PASS" : "FAIL"}  ${JSON.stringify(input)} => ${JSON.stringify(result)}`);
}

