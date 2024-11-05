import Link from "next/link";

export default function NavService({ name }) {
  return (
    <Link
      href={`/services${name}`}
      className="block my-1 px-8 hover:bg-gray-900  py-2"
    >
      {name}
    </Link>
  );
}
