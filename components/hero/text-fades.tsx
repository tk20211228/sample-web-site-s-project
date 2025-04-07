"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `私たちは保守メンテナンスのプロフェッショナル。
豊富な経験 と 確かな技術 を持つスタッフが、 あなたのシステムを24時間365日見守ります。 トラブルが発生しても迅速に対応、安心をお届けします。 どんな小さなことでもお気軽にご相談ください。 あなたのビジネスを止めない、 それが私たちの使命です。
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} className="" />;
}
