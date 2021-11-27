/* 
	Used to analyse the projects bundle size
------------------------------------------------

const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})

------------------------------------------------
	Wrap the exported object in `withBundleAnalyzer`
*/

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true
}
