import Link from "next/link";

export default function NavService({ name, navigate }) {
  return (
    <Link
      href={`${navigate}`}
      className="block my-1 px-8 hover:bg-gray-900  py-2"
    >
      {name}
    </Link>
  );
}
