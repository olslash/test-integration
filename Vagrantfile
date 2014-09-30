# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<SCRIPT

sudo apt-get install wget ca-certificates

wget -q -O - https://jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins-ci.org/debian binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get -y update
sudo apt-get -y install jenkins

SCRIPT

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
	config.vm.box = "ubuntu/trusty64"
  	config.vm.network "forwarded_port", guest: 8080, host: 8080
  	config.vm.synced_folder ".", "/home/vagrant/test-integration"
	config.vm.provision "shell", inline: $script
 	config.vm.provider :virtualbox do |vb|
		vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
		vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
	end
end
