import React from 'react';

export default function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  console.log('params:', params);
  return <div>ProfilePage</div>;
}
