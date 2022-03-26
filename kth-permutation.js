

// Function to find the index of
// number at first position of
// kth sequence of set of size n
function findFirstNumIndex(k, n)
{
if (n == 1) return 0;
n--;

let first_num_index;

// n_actual_fact = n!
let n_partial_fact = n;

while (k >= n_partial_fact && n > 1)
{
	n_partial_fact = n_partial_fact *
					(n - 1);
	n--;
}

// First position of the
// kth sequence will be
// occupied by the number present
// at index = k / (n-1)!
first_num_index = k / n_partial_fact;

k = k % n_partial_fact;
return first_num_index;
}

// Function to find the
// kth permutation of n numbers
function findKthPermutation(n, k)
{
// Store readonly answer
let ans = "";

var s = Set();

// Insert all natural number
// upto n in set
for (let i = 1; i <= n; i++)
	s.Add(i);

const v = [...s];
// Mark the first position
let itr = v[0];

// Subtract 1 to
// get 0 based
// indexing
k = k - 1;

for (let i = 0; i < n; i++)
{
	let index = findFirstNumIndex(k, n - i);

	// itr now points to the
	// number at index in set s
	if(index < v.length)
	{
	ans += ((v[index].toString()));
	v.removeAt(index);
	}
	else
	ans += ''.join("", itr + 2);

	// Remove current number
	// from the set
	itr = v[0];
}
return ans;
}

